# Run BoltMCP locally with Docker Compose

This setup is only for local testing and not for production environments. Access is granted through your GitHub account.

> **Warning**: Do not use this setup to deploy BoltMCP in a production setting.

## Prerequisites

- [Apply for access](https://boltmcp.io) to greenlist your GitHub username
- [Download and install Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/)

Make sure Docker Desktop is open and running (or alternatively, have Docker Compose installed by other means).

## Setup

### 1. Download the application

#### Generate a personal access token (PAT)

Visit [https://github.com/settings/tokens/new?scopes=read:packages](https://github.com/settings/tokens/new?scopes=read:packages) and set the following fields:

- **Note**: `BoltMCP Access`
- **Select scopes**: `read:packages`

Click **Generate new token** then copy the generated token.

#### Authenticate Docker with GHCR

```bash
docker login ghcr.io
```

- **Username**: `<your-github-username>`
- **Password**: `<your-token-from-above>`

#### Pull images

```bash
docker compose pull
```

### 2. Set up your environment

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

### 3. Set up the identity provider

#### Run the Keycloak service

We'll use Keycloak as our identity provider (IdP) to authenticate users of BoltMCP.

```bash
docker compose up keycloak --wait
```

#### Create an OIDC client

- Visit [http://host.docker.internal:8080](http://host.docker.internal:8080) and sign in:
  - **Username**: `admin`
  - **Password**: `password` (or whatever credentials are specified in [.env](.env))
- Click **Clients** then **Create client**:
  - **Client type**: `OpenID Connect`
  - **Client ID**: `boltmcp`
- Click **Next**
  - Toggle on **Client authentication**
  - **PKCE Method**: `S256`
- Click **Next**
  - **Root URL**: `http://host.docker.internal:3000`
  - **Valid redirect URIs**: `/api/auth/callback/keycloak`
- Click **Save** then click the **Credentials** tab
  - Copy the **Client Secret**
  - Paste it into [.env](.env) as the value of the `OIDC_CLIENT_SECRET` variable

## Run BoltMCP

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

```bash
docker compose down
docker compose pull
docker compose up --wait
```

## Cleanup

To stop the application and remove the persisted data and all downloaded images:

```bash
docker compose down --volumes --rmi all
```

> **Warning**: This will delete all your BoltMCP data.

## Troubleshooting

### Images fail to pull

If you get authentication errors when pulling images, ensure your GitHub account has been granted access by BoltMCP, and that you have succesfully [authenticated with docker](#authenticate-docker-with-ghcr).

### Port conflicts

If you get port conflict errors, make sure ports `3000`, `3001`, and `8080` are not already in use by other applications.

### Database connection errors

If services fail to connect to the database, ensure all required environment variables are set correctly in your [.env](.env) file.
