# @open-mcp/justizonline_gv_at_jop_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "justizonline_gv_at_jop_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/justizonline_gv_at_jop_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/justizonline_gv_at_jop_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add justizonline_gv_at_jop_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add justizonline_gv_at_jop_api \
  .cursor/mcp.json \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add justizonline_gv_at_jop_api \
  /path/to/client/config.json \
  --X_API_KEY=$X_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "justizonline_gv_at_jop_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/justizonline_gv_at_jop_api"],
      "env": {"X_API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `X_API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### listexpertsv1

**Environment variables**

- `X_API_KEY`

**Input schema**

- `from` (string)
- `until` (string)
- `type` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### getexpertbyaddresscodev1

**Environment variables**

- `X_API_KEY`

**Input schema**

- `addressCode` (string)
