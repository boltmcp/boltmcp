# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","X_API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider
- `X_API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### generate_resume_generate_resume_post

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `role` (string)
- `job_description` (string)
- `format` (string)
- `original_resume` (other)
- `enable_thinking` (boolean)

### download_file_download_filename_get

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `filename` (string)

### get_resume_resume_resume_id_get

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `resume_id` (integer)

### evaluate_resume_evaluate_resume_post

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `pdf_url` (string)
- `job_description` (string)

### create_resume_from_content_create_resume_from_content_post

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `role` (string)
- `profile_summary` (string)
- `key_achievements` (array)
- `areas_of_expertise` (array)
- `format` (string)

### compile_typ_compile_typ_post

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `typ_file` (string)
- `output_filename` (other)

### generate_download_link_generate_link_filename_get

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `filename` (string)

### health_check_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters
