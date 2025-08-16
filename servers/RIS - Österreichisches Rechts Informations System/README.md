# @open-mcp/RIS - Österreichisches Rechts Informations System

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "RIS - Österreichisches Rechts Informations System": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/RIS - Österreichisches Rechts Informations System@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/RIS - Österreichisches Rechts Informations System@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add RIS - Österreichisches Rechts Informations System \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add RIS - Österreichisches Rechts Informations System \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add RIS - Österreichisches Rechts Informations System \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "RIS - Österreichisches Rechts Informations System": {
      "command": "npx",
      "args": ["-y", "@open-mcp/RIS - Österreichisches Rechts Informations System"],
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

### postquerybundesrecht_brkons

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_bgblauth

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_bgblpdf

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_bgblalt

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_begut

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_regv

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybundesrecht_erv

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerylandesrecht_lrkons

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerylandesrecht_lgblauth

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerylandesrecht_lgbl

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerylandesrecht_lgblno

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerylandesrecht_vbl

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerybezirke_bvb

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerygemeinden_gr

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerygemeinden_gra

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_vfgh

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_vwgh

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_normenliste

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_justiz

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_bvwg

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_lvwg

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_dsk

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_dok

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_pvak

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_gbk

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_uvs

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_asylgh

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_ubas

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_umse

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_bks

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postqueryjudikatur_verg

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_pruefgewo

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_avsv

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_spg

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_avn

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_kmger

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_upts

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_mrp

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postquerysonstige_erlaesse

**Environment variables**

No environment variables required

**Input schema**

No input parameters
