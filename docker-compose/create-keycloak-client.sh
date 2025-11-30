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
JSON_FILE="${1}"

# Validate JSON file
if [ -z "$JSON_FILE" ]; then
    error_exit "JSON configuration file is required.\nUsage: $0 <config.json>"
fi

if [ ! -f "$JSON_FILE" ]; then
    error_exit "JSON file not found: $JSON_FILE"
fi

echo -e "${GREEN}Setting up Keycloak OIDC client...${NC}\n"
echo "Configuration:"
cat "$JSON_FILE"
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

# Check if Keycloak is immediately ready
echo "Checking if Keycloak is ready..."
if ! docker compose exec keycloak /opt/keycloak/bin/kcadm.sh config credentials \
    --server http://localhost:8080 \
    --realm master \
    --user "$KEYCLOAK_ADMIN_USERNAME" \
    --password "$KEYCLOAK_ADMIN_PASSWORD" > /dev/null 2>&1; then
    error_exit "Keycloak is not ready.\nPlease ensure Keycloak is fully started before running this script."
fi

echo -e "${GREEN}Keycloak is ready!${NC}\n"

# Create the client from JSON file
echo "Creating OIDC client..."

CREATE_OUTPUT=$(cat "$JSON_FILE" | docker compose exec -T keycloak /opt/keycloak/bin/kcadm.sh create clients -f - 2>&1)

CREATE_EXIT_CODE=$?

if [ $CREATE_EXIT_CODE -ne 0 ]; then
    error_exit "Failed to create OIDC client. Output:\n$CREATE_OUTPUT"
fi

# Extract the Keycloak-generated client UUID from the output
CLIENT_UUID=$(echo "$CREATE_OUTPUT" | grep -o '[a-f0-9-]\{36\}' | head -1)

if [ -z "$CLIENT_UUID" ]; then
    error_exit "Failed to get client UUID from create command. Output:\n$CREATE_OUTPUT"
fi

echo -e "${GREEN}Client created successfully!${NC}\n"

# Get the full client details to extract clientId and secret
echo "Retrieving client details..."
CLIENT_DETAILS=$(docker compose exec keycloak /opt/keycloak/bin/kcadm.sh get clients/"$CLIENT_UUID" 2>&1)

if [ $? -ne 0 ]; then
    error_exit "Failed to retrieve client details. Output:\n$CLIENT_DETAILS"
fi

# Extract clientId using grep and sed (no jq required)
CLIENT_ID=$(echo "$CLIENT_DETAILS" | grep '"clientId"' | sed 's/.*"clientId" : "\([^"]*\)".*/\1/')

# Extract secret using grep and sed
CLIENT_SECRET=$(echo "$CLIENT_DETAILS" | grep '"secret"' | sed 's/.*"secret" : "\([^"]*\)".*/\1/')

if [ -z "$CLIENT_ID" ]; then
    error_exit "Failed to extract clientId from client details"
fi

if [ -z "$CLIENT_SECRET" ]; then
    error_exit "Failed to extract client secret from client details"
fi

echo -e "${GREEN}✓ Setup complete!${NC}\n"
echo "Client ID:"
echo -e "${YELLOW}${CLIENT_ID}${NC}"
echo ""
echo "Client Secret:"
echo -e "${YELLOW}${CLIENT_SECRET}${NC}"
echo ""
echo "Please update your .env file with the values above."
