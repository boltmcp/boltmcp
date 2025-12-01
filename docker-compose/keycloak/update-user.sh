#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Error handling function
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Parse arguments
USERNAME=""
EMAIL=""
FIRST_NAME=""

# First positional argument is username
if [ -n "$1" ] && [[ ! "$1" =~ ^-- ]]; then
    USERNAME="$1"
    shift
fi

# Parse flag arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --email)
            EMAIL="$2"
            shift 2
            ;;
        --firstName)
            FIRST_NAME="$2"
            shift 2
            ;;
        *)
            error_exit "Unknown option: $1\nUsage: $0 <username> --email <email> --firstName <firstName>"
            ;;
    esac
done

# Validate arguments
if [ -z "$USERNAME" ]; then
    error_exit "Username is required.\nUsage: $0 <username> --email <email> --firstName <firstName>"
fi

if [ -z "$EMAIL" ]; then
    error_exit "Email is required (use --email flag).\nUsage: $0 <username> --email <email> --firstName <firstName>"
fi

if [ -z "$FIRST_NAME" ]; then
    error_exit "First name is required (use --firstName flag).\nUsage: $0 <username> --email <email> --firstName <firstName>"
fi

echo -e "${GREEN}Updating user information...${NC}\n"
echo "Username: $USERNAME"
echo "Email: $EMAIL"
echo "First Name: $FIRST_NAME"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    error_exit ".env file not found. Please create it from .env.example first."
fi

# Load environment variables
source .env

# Check if required variables are set
if [ -z "$KEYCLOAK_ADMIN_USERNAME" ] || [ -z "$KEYCLOAK_ADMIN_PASSWORD" ]; then
    error_exit "KEYCLOAK_ADMIN_USERNAME or KEYCLOAK_ADMIN_PASSWORD not set in .env"
fi

# Check if Keycloak container is running
if ! docker compose ps keycloak | grep -q "Up\|running"; then
    error_exit "Keycloak container is not running.\nPlease start it with: docker compose up keycloak --wait"
fi

# Check if Keycloak is ready
echo "Checking if Keycloak is ready..."
if ! docker compose exec keycloak /opt/keycloak/bin/kcadm.sh config credentials \
    --server http://localhost:8080 \
    --realm master \
    --user "$KEYCLOAK_ADMIN_USERNAME" \
    --password "$KEYCLOAK_ADMIN_PASSWORD" > /dev/null 2>&1; then
    error_exit "Keycloak is not ready.\nPlease ensure Keycloak is fully started before running this script."
fi

echo -e "${GREEN}Keycloak is ready!${NC}\n"

# Get user by username
echo "Looking up user: $USERNAME..."
USER_DATA=$(docker compose exec keycloak /opt/keycloak/bin/kcadm.sh get users -q username="$USERNAME" 2>&1)

if [ $? -ne 0 ]; then
    error_exit "Failed to query users. Output:\n$USER_DATA"
fi

# Extract user ID using grep and sed
USER_ID=$(echo "$USER_DATA" | grep '"id"' | head -1 | sed 's/.*"id" : "\([^"]*\)".*/\1/')

if [ -z "$USER_ID" ]; then
    error_exit "User not found: $USERNAME"
fi

echo -e "${GREEN}Found user with ID: ${USER_ID}${NC}\n"

# Update user email, firstName, and set emailVerified to true
echo "Updating user information..."
UPDATE_OUTPUT=$(docker compose exec keycloak /opt/keycloak/bin/kcadm.sh update users/"$USER_ID" \
    -s email="$EMAIL" \
    -s emailVerified=true \
    -s firstName="$FIRST_NAME" 2>&1)

UPDATE_EXIT_CODE=$?

if [ $UPDATE_EXIT_CODE -ne 0 ]; then
    error_exit "Failed to update user. Output:\n$UPDATE_OUTPUT"
fi

echo -e "${GREEN}✓ User updated successfully!${NC}\n"
echo "User: $USERNAME"
echo -e "First name: ${YELLOW}${FIRST_NAME}${NC}"
echo -e "New email: ${YELLOW}${EMAIL}${NC}"
echo -e "Email verified: ${YELLOW}true${NC}"
