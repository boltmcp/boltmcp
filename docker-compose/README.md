# Testing BoltMCP locally with Docker Compose

This setup is for local testing and not for production environments. Access is granted with a JSON credentials key.

> **Warning**: Do not use this setup to deploy BoltMCP in a production setting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [1. Set up your environment](#1-set-up-your-environment)
  - [2. Download the application](#2-download-the-application)
  - [3. Set up the identity provider](#3-set-up-the-identity-provider)
- [Start the application](#start-the-application)
- [Stop the application](#stop-the-application)
- [Update to a newer version](#update-to-a-newer-version)
- [Cleanup](#cleanup)
- [Troubleshooting](#troubleshooting)
- [Configuring Keycloak](#configuring-keycloak)
- [OpenAI playground](#openai-playground)

## Prerequisites

- [Apply for access](https://boltmcp.io) to get alpha tester credentials
- [Download and install Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/)
- Ensure Docker Desktop is running
- Ensure the following ports are available on your machine: `3000`, `3001`, `3002`, `6274`, `6277`, and `8080`

> Alternatively, on Linux you can use Docker Compose with the plain Docker Engine v20.10+ without needing Docker Desktop

## Installation

Clone this repository and navigate to the `docker-compose` directory:

```bash
git clone https://github.com/boltmcp/boltmcp.git
cd boltmcp/docker-compose
```

### 1. Set up your environment

#### Create an environment file:

```bash
cp .env.example .env
```

#### Check the state of your `/etc/hosts`:

```bash
cat /etc/hosts
```

If it doesn't contain an entry for `host.docker.internal`, run the command below (requires password).

```bash
printf "\n127.0.0.1 host.docker.internal\n" | sudo tee -a /etc/hosts
```

> This command adds a line to your `/etc/hosts` which tells your computer to resolve the hostname `host.docker.internal` to the localhost IP address `127.0.0.1`.

### 2. Download the application

#### Authenticate Docker

Download your alpha tester `key.json` to this directory, then run:

```bash
cat ./key.json | docker login \
  --username _json_key \
  --password-stdin \
  https://europe-west2-docker.pkg.dev
```

#### Pull images

```bash
docker compose pull
```

### 3. Set up the identity provider

#### Run the Keycloak service

We'll use Keycloak as our identity provider (IdP) to authenticate users of BoltMCP.

```bash
docker compose up keycloak --wait
```

#### Create OIDC clients

```bash
./keycloak/create-clients.sh ./keycloak/clients
```

This will create three clients in Keycloak:

- One client for the main platform
- One client for the MCP server to validate tokens
- One client for MCP Clients to connect to, including the inspector and the playground

#### Update environment variables

Copy and paste the client IDs and secrets from the command above to the following variables in your [.env](.env):

```bash
OIDC_PLATFORM_CLIENT_ID="..."
OIDC_PLATFORM_CLIENT_SECRET="..."

OIDC_MCP_SERVER_CLIENT_ID="..."
OIDC_MCP_SERVER_CLIENT_SECRET="..."

OIDC_MCP_CLIENT_CLIENT_ID="..."
OIDC_MCP_CLIENT_CLIENT_SECRET="..."
```

#### Update admin user

Finally, we'll give our admin user a placeholder email address and name:

```bash
./keycloak/update-user.sh admin \
  --firstName "Admin" \
  --email "you@example.com"
```

> Replace `you@example.com` with an email address you own

## Start the application

After completing the installation steps above, run all the services:

```bash
docker compose up --wait
```

Now you can open [http://host.docker.internal:3000](http://host.docker.internal:3000) and sign in:

- **Username**: `admin`
- **Password**: `password`

> These credentials are defined under "Keycloak" in [.env](.env)

> BoltMCP uses Single Sign-On (SSO), meaning you don't need to provide credentials when signing in if your browser is already signed-in to the identity provider.

## Stop the application

```bash
docker compose down
```

## Update to a newer version

First stop the application:

```bash
docker compose down
```

Then pull the latest configuration:

```bash
git pull
```

And pull the latest images:

```bash
docker compose pull
```

Check if you have any missing or redundant environment variables:

```bash
diff .env.example .env
```

Update [.env](.env) as required.

Finally, start the application:

```bash
docker compose up --wait
```

## Cleanup

To stop the application and remove the persisted data and all downloaded images:

```bash
docker compose down --volumes --rmi all
```

> **Warning**: This will delete all your BoltMCP data.

To remove your alpha tester credentials from your docker config:

```bash
docker logout https://europe-west2-docker.pkg.dev
```

Finally, you might choose to remove the line `127.0.0.1 host.docker.internal` from your `/etc/hosts`.

## Troubleshooting

### Images fail to pull

If you get authentication errors when pulling images, ensure your GitHub account has been granted access by BoltMCP, and that you have successfully [authenticated with docker](#authenticate-docker).

### Port conflicts

If you get port conflict errors, make sure the following ports are not already in use by other applications: `3000`, `3001`, `3002`, `6274`, `6277`, `8080`.

### Database connection errors

If services fail to connect to the database, ensure all required environment variables are set correctly in your [.env](.env) file.

## Configuring Keycloak

Visit [http://host.docker.internal:8080](http://host.docker.internal:8080) and sign in:

- **Username**: `admin`
- **Password**: `password`

> These credentials are defined under "Keycloak" in [.env](.env)

### Example: creating a client scope:

- Click **Client scopes** then **Create client scope**:
  - **Name**: `mcp:my-server`
  - Toggle on **Display on consent screen**
  - Toggle on **Include in token scope**
- Click **Save** then click **Mappers**:
  - Click **Configure a new mapper > Audience**
  - **Name**: `audience-config`
  - **Included Custom Audience**: `http://host.docker.internal:3001/my-server/mcp`
  - Click **Save**
- Click **Clients > boltmcp-mcp-client > Client scopes > Add client scope**
  - Check `mcp:my-server`
  - Click `Add > Optional`

### Example: creating an OIDC client:

- Click **Clients** then **Create client**:
  - **Client type**: `OpenID Connect`
  - **Client ID**: `my-client`
- Click **Next**
  - Toggle on **Client authentication**
  <!-- - **PKCE Method**: `S256` -->
- Click **Next**
  - **Root URL**: `http://host.docker.internal:3000`
  - **Valid redirect URIs**: `/api/auth/callback/keycloak`
- Click **Save** then click the **Credentials** tab
  - Copy the **Client Secret**
