# Run BoltMCP locally with Docker Compose (Windows)

This setup is only for local testing and not for production environments. Access is granted with a JSON credentials key.

> **Warning**: Do not use this setup to deploy BoltMCP in a production setting.

## Prerequisites

- [Apply for access](https://boltmcp.io) to get alpha tester credentials
- [Download and install Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)
- **PowerShell** (comes with Windows) - used for all commands in this guide

Make sure Docker Desktop is open and running.

> **Note**: This guide uses PowerShell commands. Open PowerShell as Administrator when indicated.

## Installation

### 1. Set up your environment

#### Create an environment file:

Open PowerShell in the project directory and run:

```powershell
Copy-Item .env.example .env
```

#### Configure your hosts file:

**⚠️ Requires Administrator PowerShell**

First, check if `host.docker.internal` is already in your hosts file:

```powershell
Get-Content C:\Windows\System32\drivers\etc\hosts | Select-String "host.docker.internal"
```

If it returns nothing, you need to add the entry. Run PowerShell **as Administrator** and execute:

```powershell
Add-Content -Path C:\Windows\System32\drivers\etc\hosts -Value "`n127.0.0.1 host.docker.internal"
```

<details>
  <summary>Alternative: Manual hosts file editing</summary>

1. Open Notepad as Administrator (Right-click → Run as administrator)
2. Open file: `C:\Windows\System32\drivers\etc\hosts`
3. Add this line at the end:
   ```
   127.0.0.1 host.docker.internal
   ```
4. Save the file

</details>

> **Note**: This entry tells your computer to resolve the hostname `host.docker.internal` to the localhost IP address `127.0.0.1`.

### 2. Download the application

#### Authenticate Docker

Download your alpha tester `key.json` to this directory, then run:

**PowerShell:**

```powershell
Get-Content .\key.json | docker --config .\docker-profile login --username _json_key --password-stdin https://europe-west2-docker.pkg.dev
```

> Setting `--config` ensures the credentials don't overwrite any existing credentials you have for the same domain

#### Pull images

```powershell
docker compose pull
```

### 3. Set up the identity provider

#### Run the Keycloak service

We'll use Keycloak as our identity provider (IdP) to authenticate users of BoltMCP.

```powershell
docker compose up keycloak --wait
```

#### Create OIDC clients

**⚠️ Requires WSL or Git Bash** - The setup scripts are bash scripts and need a Unix-like environment.

<details>
  <summary>Option 1: Use WSL (Recommended)</summary>

If you have [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) installed:

```bash
wsl bash ./create-keycloak-client.sh ./oidc-clients-config/platform.json
```

</details>

<details>
  <summary>Option 2: Use Git Bash</summary>

If you have [Git for Windows](https://git-scm.com/download/win) installed (includes Git Bash):

Open Git Bash in the project directory and run:

```bash
./create-keycloak-client.sh ./oidc-clients-config/platform.json
```

</details>

<details>
  <summary>Option 3: Manual setup (No additional dependencies required)</summary>

**Create an OIDC client for the main platform:**

- Visit [http://host.docker.internal:8080](http://host.docker.internal:8080) and sign in:
  - **Username**: `admin`
  - **Password**: `password` (or whatever credentials are specified in `.env`)
- Click **Clients** then **Create client**:
  - **Client type**: `OpenID Connect`
  - **Client ID**: `boltmcp-platform`
- Click **Next**
  - Toggle on **Client authentication**
- Click **Next**
  - **Root URL**: `http://host.docker.internal:3000`
  - **Valid redirect URIs**: `/api/auth/callback/keycloak`
- Click **Save** then click the **Credentials** tab
  - Copy the **Client Secret**

Copy and paste the client id and secret to the values of `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET` in `.env`.

**Create an OIDC client for the MCP servers:**

Repeat the above process with these settings:

- **Client ID**: `boltmcp-mcp-server`
- **Root URL**: `http://host.docker.internal:6277`
- **Valid redirect URIs**: `/*`

Copy the credentials to `MCP_SERVER_AUTH_CLIENT_ID` and `MCP_SERVER_AUTH_CLIENT_SECRET` in `.env`.

**Create an OIDC client for MCP clients:**

Repeat the process again with:

- **Client ID**: `boltmcp-mcp-client`
- **Client type**: `OpenID Connect`
- **Client authentication**: Toggle ON
- **Root URL**: `http://host.docker.internal:3001`
- **Valid redirect URIs**: `/auth/callback`

Copy the credentials to `PLAYGROUND_AUTH_CLIENT_ID` and `PLAYGROUND_AUTH_CLIENT_SECRET` in `.env`.

</details>

---

**If using WSL or Git Bash**, run these commands to create all three clients:

```bash
# Create platform client
./create-keycloak-client.sh ./oidc-clients-config/platform.json

# Create MCP server client
./create-keycloak-client.sh ./oidc-clients-config/mcp-server.json

# Create MCP client
./create-keycloak-client.sh ./oidc-clients-config/mcp-client.json
```

Each script will output a client ID and secret. Copy and paste them to your `.env` file:

- First script → `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET`
- Second script → `MCP_SERVER_AUTH_CLIENT_ID` and `MCP_SERVER_AUTH_CLIENT_SECRET`
- Third script → `PLAYGROUND_AUTH_CLIENT_ID` and `PLAYGROUND_AUTH_CLIENT_SECRET`

## Start the application

After completing the setup above, run all the services:

```powershell
docker compose up --wait
```

Now you can open [http://host.docker.internal:3000](http://host.docker.internal:3000) and sign in.

> **Note**: BoltMCP uses Single Sign-On (SSO), meaning you don't need to provide credentials when signing in if your browser is already signed-in to the identity provider.

## Stop the application

```powershell
docker compose down
```

## Update to a newer version

First stop the application:

```powershell
docker compose down
```

Then pull the latest configuration:

```powershell
git pull
```

Check if you have any missing or redundant environment variables:

```powershell
Compare-Object (Get-Content .env.example) (Get-Content .env)
```

Or manually compare the files in a text editor.

Update `.env` as required.

Finally, start the application:

```powershell
docker compose up --wait
```

## Cleanup

To stop the application and remove the persisted data and all downloaded images:

```powershell
docker compose down --volumes --rmi all
```

> **Warning**: This will delete all your BoltMCP data.

To remove your alpha tester credentials from your docker config:

```powershell
docker --config .\docker-profile logout https://europe-west2-docker.pkg.dev
```

## Troubleshooting

### Images fail to pull

If you get authentication errors when pulling images, ensure your GitHub account has been granted access by BoltMCP, and that you have successfully [authenticated with Docker](#authenticate-docker).

### Port conflicts

If you get port conflict errors, make sure the following ports are not already in use by other applications: `3000`, `3001`, `3002`, `6274`, `6277`, `8080`.

You can check which processes are using these ports:

```powershell
Get-NetTCPConnection -LocalPort 3000,3001,3002,6274,6277,8080 -ErrorAction SilentlyContinue | Select-Object LocalPort, OwningProcess, @{Name="ProcessName";Expression={(Get-Process -Id $_.OwningProcess).ProcessName}}
```

### Database connection errors

If services fail to connect to the database, ensure all required environment variables are set correctly in your `.env` file.

### Hosts file changes not taking effect

After editing the hosts file, you may need to flush your DNS cache:

```powershell
ipconfig /flushdns
```

### WSL/Git Bash issues

If the bash scripts fail:

- **WSL**: Ensure WSL is properly installed with `wsl --install`
- **Git Bash**: Ensure Git for Windows is installed from [git-scm.com](https://git-scm.com/download/win)
- **Alternative**: Use the manual setup option which requires no additional dependencies
