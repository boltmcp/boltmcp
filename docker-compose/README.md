# Run BoltMCP locally with Docker Compose

This setup is only for local testing and not for production environments. Access is granted with a JSON credentials key.

> **Warning**: Do not use this setup to deploy BoltMCP in a production setting.

## Prerequisites

- [Apply for access](https://boltmcp.io) to get alpha tester credentials
- [Download and install Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/)

Make sure Docker Desktop is open and running (or alternatively, have Docker Compose installed by other means).

## Installation

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
echo "\n127.0.0.1 host.docker.internal" | sudo tee -a /etc/hosts
```

> **Note**: This command adds a line to your `/etc/hosts` which tells your computer to resolve the hostname `host.docker.internal` to the localhost IP address `127.0.0.1`.

### 2. Download the application

#### Authenticate Docker

Download your alpha tester `key.json` to this directory, then run:

```bash
cat ./key.json | docker --config ./docker-profile login \
  --username _json_key \
  --password-stdin \
  https://europe-west2-docker.pkg.dev
```

> Setting `--config` ensures the credentials don't overwrite any existing credentials you have for the same domain

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

**Create an OIDC client for the main platform:**

```bash
./create-keycloak-client.sh ./oidc-clients-config/platform.json
```

<details>
  <summary>Alternative: manual setup</summary>

- Visit [http://host.docker.internal:8080](http://host.docker.internal:8080) and sign in:
  - **Username**: `admin`
  - **Password**: `password` (or whatever credentials are specified in [.env](.env))
- Click **Clients** then **Create client**:
  - **Client type**: `OpenID Connect`
  - **Client ID**: `boltmcp-platform`
- Click **Next**
  - Toggle on **Client authentication**
  <!-- - **PKCE Method**: `S256` -->
- Click **Next**
  - **Root URL**: `http://host.docker.internal:3000`
  - **Valid redirect URIs**: `/api/auth/callback/keycloak`
- Click **Save** then click the **Credentials** tab
  - Copy the **Client Secret**

</details>

Copy and paste the client id and secret to the values of `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET` in [.env](.env).

**Create an OIDC client for the MCP servers to validate tokens:**

```bash
./create-keycloak-client.sh ./oidc-clients-config/mcp-server.json
```

Copy and paste the client id and secret to the values of `MCP_SERVER_AUTH_CLIENT_ID` and `MCP_SERVER_AUTH_CLIENT_SECRET` in [.env](.env).

**Create an OIDC client for MCP clients including the playground and the inspector:**

```bash
./create-keycloak-client.sh ./oidc-clients-config/mcp-client.json
```

Copy and paste the client id and secret to the values of `PLAYGROUND_AUTH_CLIENT_ID` and `PLAYGROUND_AUTH_CLIENT_SECRET` in [.env](.env).

## Start the application

After completing the setup above, run all the services:

```bash
docker compose up --wait
```

Now you can open [http://host.docker.internal:3000](http://host.docker.internal:3000) and sign in.

> **Note**: BoltMCP uses Single Sign-On (SSO), meaning you don't need to provide credentials when signing in if your browser is already signed-in to the identity provider.

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
docker --config ./docker-profile logout \
  https://europe-west2-docker.pkg.dev
```

## Troubleshooting

### Images fail to pull

If you get authentication errors when pulling images, ensure your GitHub account has been granted access by BoltMCP, and that you have succesfully [authenticated with docker](#authenticate-docker-with-ghcr).

### Port conflicts

If you get port conflict errors, make sure the following ports are not already in use by other applications: `3000`, `3001`, `3002`, `6274`, `6277`, `8080`.

### Database connection errors

If services fail to connect to the database, ensure all required environment variables are set correctly in your [.env](.env) file.
