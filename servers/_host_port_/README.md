# @open-mcp/_host_port_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_host_port_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_host_port_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_host_port_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _host_port_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _host_port_ \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add _host_port_ \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_host_port_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_host_port_"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_active_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_active_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### patch_active_

**Environment variables**

- `API_KEY`

**Input schema**

- `Operation` (string)
- `Target-Type` (string)
- `Target-Delimiter` (string)
- `Target` (string)
- `Trim-Target-Whitespace` (string)

### post_active_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### put_active_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_commands_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_commands_commandid_

**Environment variables**

- `API_KEY`

**Input schema**

- `commandId` (string)

### get_obsidian_local_rest_api_crt

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_open_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)
- `newLeaf` (boolean)

### get_openapi_yaml

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_periodic_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### get_periodic_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### patch_periodic_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)
- `Operation` (string)
- `Target-Type` (string)
- `Target-Delimiter` (string)
- `Target` (string)
- `Trim-Target-Whitespace` (string)

### post_periodic_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### put_periodic_period_

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)

### delete_periodic_period_year_month_day_

**Environment variables**

- `API_KEY`

**Input schema**

- `year` (number)
- `month` (number)
- `day` (number)
- `period` (string)

### get_periodic_period_year_month_day_

**Environment variables**

- `API_KEY`

**Input schema**

- `year` (number)
- `month` (number)
- `day` (number)
- `period` (string)

### patch_periodic_period_year_month_day_

**Environment variables**

- `API_KEY`

**Input schema**

- `year` (number)
- `month` (number)
- `day` (number)
- `period` (string)
- `Operation` (string)
- `Target-Type` (string)
- `Target-Delimiter` (string)
- `Target` (string)
- `Trim-Target-Whitespace` (string)

### post_periodic_period_year_month_day_

**Environment variables**

- `API_KEY`

**Input schema**

- `year` (number)
- `month` (number)
- `day` (number)
- `period` (string)

### put_periodic_period_year_month_day_

**Environment variables**

- `API_KEY`

**Input schema**

- `year` (number)
- `month` (number)
- `day` (number)
- `period` (string)

### post_search_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### post_search_simple_

**Environment variables**

- `API_KEY`

**Input schema**

- `query` (string)
- `contextLength` (number)

### get_vault_

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_vault_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)

### get_vault_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)

### patch_vault_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)
- `Operation` (string)
- `Target-Type` (string)
- `Target-Delimiter` (string)
- `Target` (string)
- `Trim-Target-Whitespace` (string)

### post_vault_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)

### put_vault_filename_

**Environment variables**

- `API_KEY`

**Input schema**

- `filename` (string)

### get_vault_pathtodirectory_

**Environment variables**

- `API_KEY`

**Input schema**

- `pathToDirectory` (string)
