#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Error handling function
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Parse arguments
CONFIGS_DIR="${1}"

# Validate configs directory
if [ -z "$CONFIGS_DIR" ]; then
    error_exit "Configuration directory is required.\nUsage: $0 <configs-directory>"
fi

if [ ! -d "$CONFIGS_DIR" ]; then
    error_exit "Directory not found: $CONFIGS_DIR"
fi

# Find all JSON files in the directory
JSON_FILES=($(find "$CONFIGS_DIR" -maxdepth 1 -name "*.json" -type f | sort))

if [ ${#JSON_FILES[@]} -eq 0 ]; then
    error_exit "No JSON configuration files found in: $CONFIGS_DIR"
fi

echo -e "${GREEN}Found ${#JSON_FILES[@]} OIDC client configuration(s)${NC}\n"

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

# Create temporary file to store results
RESULTS_FILE=$(mktemp)
trap "rm -f $RESULTS_FILE" EXIT

SUCCESS_COUNT=0

# Process each JSON file
for JSON_FILE in "${JSON_FILES[@]}"; do
    FILENAME=$(basename "$JSON_FILE")
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}Processing: ${FILENAME}${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # Display configuration
    echo "Configuration:"
    cat "$JSON_FILE"
    echo ""

    # Create the client from JSON file
    echo "Creating OIDC client..."

    CREATE_OUTPUT=$(cat "$JSON_FILE" | docker compose exec -T keycloak /opt/keycloak/bin/kcadm.sh create clients -f - 2>&1)
    CREATE_EXIT_CODE=$?

    if [ $CREATE_EXIT_CODE -ne 0 ]; then
        echo -e "${RED}✗ Failed to create client from ${FILENAME}${NC}"
        echo -e "${RED}Output: $CREATE_OUTPUT${NC}\n"
        continue
    fi

    # Extract the Keycloak-generated client UUID from the output
    CLIENT_UUID=$(echo "$CREATE_OUTPUT" | grep -o '[a-f0-9-]\{36\}' | head -1)

    if [ -z "$CLIENT_UUID" ]; then
        echo -e "${RED}✗ Failed to get client UUID for ${FILENAME}${NC}\n"
        continue
    fi

    echo -e "${GREEN}Client created successfully!${NC}"

    # Get the full client details to extract clientId and secret
    echo "Retrieving client details..."
    CLIENT_DETAILS=$(docker compose exec keycloak /opt/keycloak/bin/kcadm.sh get clients/"$CLIENT_UUID" 2>&1)

    if [ $? -ne 0 ]; then
        echo -e "${RED}✗ Failed to retrieve client details for ${FILENAME}${NC}\n"
        continue
    fi

    # Extract clientId using grep and sed (no jq required)
    CLIENT_ID=$(echo "$CLIENT_DETAILS" | grep '"clientId"' | sed 's/.*"clientId" : "\([^"]*\)".*/\1/')

    # Extract secret using grep and sed
    CLIENT_SECRET=$(echo "$CLIENT_DETAILS" | grep '"secret"' | sed 's/.*"secret" : "\([^"]*\)".*/\1/')

    if [ -z "$CLIENT_ID" ] || [ -z "$CLIENT_SECRET" ]; then
        echo -e "${RED}✗ Failed to extract credentials for ${FILENAME}${NC}\n"
        continue
    fi

    # Store results in temporary file (format: filename|clientId|secret)
    echo "${FILENAME}|${CLIENT_ID}|${CLIENT_SECRET}" >> "$RESULTS_FILE"
    SUCCESS_COUNT=$((SUCCESS_COUNT + 1))

    echo -e "${GREEN}✓ Successfully created client: ${CLIENT_ID}${NC}\n"
done

# Display summary
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Setup Complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

if [ $SUCCESS_COUNT -eq 0 ]; then
    echo -e "${RED}No clients were created successfully.${NC}"
    exit 1
fi

echo -e "${GREEN}Successfully created ${SUCCESS_COUNT} client(s):${NC}\n"

# Read and display results from temp file
sort "$RESULTS_FILE" | while IFS='|' read -r FILENAME CLIENT_ID CLIENT_SECRET; do
    echo -e "${BLUE}${FILENAME}:${NC}"
    echo -e "  Client ID:     ${YELLOW}${CLIENT_ID}${NC}"
    echo -e "  Client Secret: ${YELLOW}${CLIENT_SECRET}${NC}"
    echo ""
done

echo -e "${YELLOW}Please update your .env file with the appropriate values above.${NC}"
