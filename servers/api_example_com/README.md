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
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_playtimeleaderboard

**Environment variables**

No environment variables required

**Input schema**

- `page` (number)
- `limit` (number)
- `sort` (string)
- `search` (string)

### get_playtimeleaderboardplayer

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)
- `sort` (string)

### get_votesleaderboard

**Environment variables**

No environment variables required

**Input schema**

- `page` (number)
- `limit` (number)
- `sort` (string)
- `search` (string)

### get_votesleaderboardplayer

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)
- `sort` (string)

### get_punishments

**Environment variables**

No environment variables required

**Input schema**

- `page` (number)
- `limit` (number)
- `sort` (string)
- `search` (string)

### get_punishmentsplayer

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)
- `page` (number)
- `limit` (number)
- `sort` (string)

### get_discorduser

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)

### get_clans

**Environment variables**

No environment variables required

**Input schema**

- `page` (number)
- `limit` (number)
- `sort` (string)
- `search` (string)

### get_clanplayer

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)

### get_clansinfo

**Environment variables**

No environment variables required

**Input schema**

- `tag` (string)
- `sort` (string)

### get_players

**Environment variables**

No environment variables required

**Input schema**

- `page` (number)
- `limit` (number)
- `sort` (string)
- `search` (string)

### get_playersplayer

**Environment variables**

No environment variables required

**Input schema**

- `player` (string)
- `sort` (string)
