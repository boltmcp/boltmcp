#!/bin/bash
set -e

# Available environment variables:

# BOLTMCP_INIT_PLATFORM_USER
# BOLTMCP_INIT_PLATFORM_PASSWORD

# BOLTMCP_INIT_MCP_SERVER_USER
# BOLTMCP_INIT_MCP_SERVER_PASSWORD

# BOLTMCP_INIT_PLAYGROUND_SCHEMA
# BOLTMCP_INIT_PLAYGROUND_USER
# BOLTMCP_INIT_PLAYGROUND_PASSWORD

# BOLTMCP_INIT_KEYCLOAK_SCHEMA
# BOLTMCP_INIT_KEYCLOAK_USER
# BOLTMCP_INIT_KEYCLOAK_PASSWORD


psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    -- Create platform user (no schema needed - uses public schema)
    CREATE USER ${BOLTMCP_INIT_PLATFORM_USER} WITH PASSWORD '${BOLTMCP_INIT_PLATFORM_PASSWORD}';
    GRANT ALL PRIVILEGES ON SCHEMA public TO ${BOLTMCP_INIT_PLATFORM_USER};
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ${BOLTMCP_INIT_PLATFORM_USER};
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO ${BOLTMCP_INIT_PLATFORM_USER};
    -- Grant default privileges for tables created by platform user to itself
    ALTER DEFAULT PRIVILEGES FOR ROLE ${BOLTMCP_INIT_PLATFORM_USER} IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO ${BOLTMCP_INIT_PLATFORM_USER};
    ALTER DEFAULT PRIVILEGES FOR ROLE ${BOLTMCP_INIT_PLATFORM_USER} IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO ${BOLTMCP_INIT_PLATFORM_USER};

    -- Create MCP server user (no schema needed - uses public schema)
    CREATE USER ${BOLTMCP_INIT_MCP_SERVER_USER} WITH PASSWORD '${BOLTMCP_INIT_MCP_SERVER_PASSWORD}';
    GRANT USAGE ON SCHEMA public TO ${BOLTMCP_INIT_MCP_SERVER_USER};
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO ${BOLTMCP_INIT_MCP_SERVER_USER};
    GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO ${BOLTMCP_INIT_MCP_SERVER_USER};
    -- Grant default privileges for tables created by platform user to mcp_server user
    -- We are assuming that it's the platform user who runs migrations
    -- MCP server only gets SELECT (read-only) access to public tables
    ALTER DEFAULT PRIVILEGES FOR ROLE ${BOLTMCP_INIT_PLATFORM_USER} IN SCHEMA public GRANT SELECT ON TABLES TO ${BOLTMCP_INIT_MCP_SERVER_USER};
    ALTER DEFAULT PRIVILEGES FOR ROLE ${BOLTMCP_INIT_PLATFORM_USER} IN SCHEMA public GRANT SELECT ON SEQUENCES TO ${BOLTMCP_INIT_MCP_SERVER_USER};

    -- Create playground user with dedicated schema
    CREATE USER ${BOLTMCP_INIT_PLAYGROUND_USER} WITH PASSWORD '${BOLTMCP_INIT_PLAYGROUND_PASSWORD}';
    CREATE SCHEMA IF NOT EXISTS ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} AUTHORIZATION ${BOLTMCP_INIT_PLAYGROUND_USER};
    GRANT ALL PRIVILEGES ON SCHEMA ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} TO ${BOLTMCP_INIT_PLAYGROUND_USER};
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} TO ${BOLTMCP_INIT_PLAYGROUND_USER};
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} TO ${BOLTMCP_INIT_PLAYGROUND_USER};
    ALTER DEFAULT PRIVILEGES IN SCHEMA ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} GRANT ALL PRIVILEGES ON TABLES TO ${BOLTMCP_INIT_PLAYGROUND_USER};
    ALTER DEFAULT PRIVILEGES IN SCHEMA ${BOLTMCP_INIT_PLAYGROUND_SCHEMA} GRANT ALL PRIVILEGES ON SEQUENCES TO ${BOLTMCP_INIT_PLAYGROUND_USER};
    ALTER USER ${BOLTMCP_INIT_PLAYGROUND_USER} SET search_path TO ${BOLTMCP_INIT_PLAYGROUND_SCHEMA}, public;

    -- Create keycloak user with dedicated schema
    CREATE USER ${BOLTMCP_INIT_KEYCLOAK_USER} WITH PASSWORD '${BOLTMCP_INIT_KEYCLOAK_PASSWORD}';
    CREATE SCHEMA IF NOT EXISTS ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} AUTHORIZATION ${BOLTMCP_INIT_KEYCLOAK_USER};
    GRANT ALL PRIVILEGES ON SCHEMA ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} TO ${BOLTMCP_INIT_KEYCLOAK_USER};
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} TO ${BOLTMCP_INIT_KEYCLOAK_USER};
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} TO ${BOLTMCP_INIT_KEYCLOAK_USER};
    ALTER DEFAULT PRIVILEGES IN SCHEMA ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} GRANT ALL PRIVILEGES ON TABLES TO ${BOLTMCP_INIT_KEYCLOAK_USER};
    ALTER DEFAULT PRIVILEGES IN SCHEMA ${BOLTMCP_INIT_KEYCLOAK_SCHEMA} GRANT ALL PRIVILEGES ON SEQUENCES TO ${BOLTMCP_INIT_KEYCLOAK_USER};
    ALTER USER ${BOLTMCP_INIT_KEYCLOAK_USER} SET search_path TO ${BOLTMCP_INIT_KEYCLOAK_SCHEMA};
EOSQL


#  What the GRANT PRIVILEGES statements mean:

#   1. GRANT ALL PRIVILEGES ON SCHEMA [schema_name] TO [user]

#   - Grants the user full control over the schema itself
#   - Allows creating, altering, and dropping objects within the schema
#   - Essential for schema ownership and management

#   2. GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA [schema_name] TO [user]

#   - Grants SELECT, INSERT, UPDATE, DELETE, and other table-level permissions
#   - Applies to all existing tables in the schema at the time this command runs
#   - Does NOT apply to tables created after this grant

#   3. GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA [schema_name] TO [user]

#   - Grants permissions on sequences (used for auto-incrementing IDs)
#   - Allows the user to use NEXTVAL, CURRVAL, and SETVAL on sequences
#   - Important for INSERT operations on tables with auto-increment columns

#   4. ALTER DEFAULT PRIVILEGES IN SCHEMA [schema_name] GRANT ALL PRIVILEGES ON TABLES TO [user]

#   - Sets default permissions for future tables created in this schema
#   - Ensures any new tables automatically inherit these privileges
#   - Critical for migrations and schema evolution

#   5. ALTER DEFAULT PRIVILEGES IN SCHEMA [schema_name] GRANT ALL PRIVILEGES ON SEQUENCES TO [user]

#   - Sets default permissions for future sequences created in this schema
#   - Ensures any new sequences automatically inherit these privileges
#   - Important for future auto-increment columns

#   Schema Design Choices:

#   - Platform & MCP Server: Use the public schema (PostgreSQL's default schema), so they share the same tables and can interact with the same data
#   - Playground: Has its own dedicated schema (boltmcp_playground) to isolate its data
#   - Keycloak: Has its own dedicated schema (boltmcp_keycloak) to isolate authentication data from application data
