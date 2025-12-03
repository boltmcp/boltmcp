#!/bin/bash
set -e

# IMPORTANT: User and schema names should be lowercase with underscores only
# (e.g. "boltmcp_platform") to avoid case-sensitivity issues.
# PostgreSQL identifier quoting (:"var") preserves the exact case, so mixed-case
# names would require quoting in all future queries.

psql --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
    -v ON_ERROR_STOP=1 \
    -v platform_user="$BOLTMCP_INIT_PLATFORM_USER" \
    -v platform_pass="$BOLTMCP_INIT_PLATFORM_PASSWORD" \
    -v mcp_user="$BOLTMCP_INIT_MCP_SERVER_USER" \
    -v mcp_pass="$BOLTMCP_INIT_MCP_SERVER_PASSWORD" \
    -v playground_schema="$BOLTMCP_INIT_PLAYGROUND_SCHEMA" \
    -v playground_user="$BOLTMCP_INIT_PLAYGROUND_USER" \
    -v playground_pass="$BOLTMCP_INIT_PLAYGROUND_PASSWORD" \
    -v keycloak_schema="$BOLTMCP_INIT_KEYCLOAK_SCHEMA" \
    -v keycloak_user="$BOLTMCP_INIT_KEYCLOAK_USER" \
    -v keycloak_pass="$BOLTMCP_INIT_KEYCLOAK_PASSWORD" \
    <<-EOSQL
    -- Create platform user (no schema needed - uses public schema)
    CREATE USER :"platform_user" WITH PASSWORD :'platform_pass';
    GRANT ALL PRIVILEGES ON SCHEMA public TO :"platform_user";
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO :"platform_user";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO :"platform_user";

    -- Create MCP server user (no schema needed - uses public schema)
    CREATE USER :"mcp_user" WITH PASSWORD :'mcp_pass';
    GRANT USAGE ON SCHEMA public TO :"mcp_user";
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO :"mcp_user";
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO :"mcp_user";
    -- Grant default privileges for tables created by platform user to mcp_server user
    -- We are assuming that it's the platform user who runs migrations
    -- MCP server only gets SELECT (read-only) access to public tables
    ALTER DEFAULT PRIVILEGES FOR ROLE :"platform_user" IN SCHEMA public GRANT SELECT ON TABLES TO :"mcp_user";
    ALTER DEFAULT PRIVILEGES FOR ROLE :"platform_user" IN SCHEMA public GRANT SELECT ON SEQUENCES TO :"mcp_user";

    -- Create playground user with dedicated schema
    CREATE USER :"playground_user" WITH PASSWORD :'playground_pass';
    CREATE SCHEMA IF NOT EXISTS :"playground_schema" AUTHORIZATION :"playground_user";
    GRANT ALL PRIVILEGES ON SCHEMA :"playground_schema" TO :"playground_user";
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA :"playground_schema" TO :"playground_user";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA :"playground_schema" TO :"playground_user";
    ALTER DEFAULT PRIVILEGES IN SCHEMA :"playground_schema" GRANT ALL PRIVILEGES ON TABLES TO :"playground_user";
    ALTER DEFAULT PRIVILEGES IN SCHEMA :"playground_schema" GRANT ALL PRIVILEGES ON SEQUENCES TO :"playground_user";
    ALTER USER :"playground_user" SET search_path TO :"playground_schema", public;
    -- Grant playground user SELECT access to public schema (same as mcp_server user)
    GRANT USAGE ON SCHEMA public TO :"playground_user";
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO :"playground_user";
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO :"playground_user";
    ALTER DEFAULT PRIVILEGES FOR ROLE :"platform_user" IN SCHEMA public GRANT SELECT ON TABLES TO :"playground_user";
    ALTER DEFAULT PRIVILEGES FOR ROLE :"platform_user" IN SCHEMA public GRANT SELECT ON SEQUENCES TO :"playground_user";

    -- Create keycloak user with dedicated schema
    CREATE USER :"keycloak_user" WITH PASSWORD :'keycloak_pass';
    CREATE SCHEMA IF NOT EXISTS :"keycloak_schema" AUTHORIZATION :"keycloak_user";
    GRANT ALL PRIVILEGES ON SCHEMA :"keycloak_schema" TO :"keycloak_user";
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA :"keycloak_schema" TO :"keycloak_user";
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA :"keycloak_schema" TO :"keycloak_user";
    ALTER DEFAULT PRIVILEGES IN SCHEMA :"keycloak_schema" GRANT ALL PRIVILEGES ON TABLES TO :"keycloak_user";
    ALTER DEFAULT PRIVILEGES IN SCHEMA :"keycloak_schema" GRANT ALL PRIVILEGES ON SEQUENCES TO :"keycloak_user";
    ALTER USER :"keycloak_user" SET search_path TO :"keycloak_schema";
EOSQL

#  Schema Design Choices:
#    - Platform & MCP Server: Use the public schema (PostgreSQL's default schema), so they share the same tables and can interact with the same data
#    - Playground: Has its own dedicated schema to isolate its data, but can also select from the public schema
#    - Keycloak: Has its own dedicated schema to isolate authentication data from application data
