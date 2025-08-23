# @open-mcp/_external_api

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_external_api": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_external_api@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_external_api@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _external_api \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _external_api \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Other

```bash
npx @open-mcp/config add _external_api \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_external_api": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_external_api"],
      "env": {"AUTHORIZATION":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### post_oauth_token

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `client_secret` (string)
- `audience` (string)
- `grant_type` (string)

### post_v1_direct_message

**Environment variables**

No environment variables required

**Input schema**

- `data` (object)

### post_v1_trigger_message_campaignid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `campaignId` (string)
- `numberLookup` (string)
- `data` (object)

### triggermessages

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `campaignId` (string)
- `action` (string)
- `data` (object)

### bulktriggermessages

**Environment variables**

No environment variables required

**Input schema**

- `campaignId` (string)
- `action` (string)
- `sendAt` (string)
- `shouldResumeAfterQuietHours` (string)
- `data` (object)

### post_v1_bulk_contacts_create

**Environment variables**

No environment variables required

**Input schema**

- `action` (string)
- `listIds` (string)
- `shouldNumberLookup` (boolean)
- `delimiter` (string)

### post_v1_contact_create

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `existingContact` (string)
- `shouldNumberLookup` (string)
- `data` (object)

### post_v1_contact_update

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `shouldNumberLookup` (string)
- `data` (object)
