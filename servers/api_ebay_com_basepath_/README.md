# @open-mcp/api_ebay_com_basepath_

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_ebay_com_basepath_": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_ebay_com_basepath_@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_ebay_com_basepath_@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_ebay_com_basepath_ \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_ebay_com_basepath_ \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_ebay_com_basepath_ \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_ebay_com_basepath_": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_ebay_com_basepath_"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### search

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `aspect_filter` (string)
- `auto_correct` (string)
- `category_ids` (string)
- `charity_ids` (string)
- `compatibility_filter` (string)
- `epid` (string)
- `fieldgroups` (string)
- `filter` (string)
- `gtin` (string)
- `limit` (string)
- `offset` (string)
- `q` (string)
- `sort` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Accept-Language` (string)

### searchbyimage

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `aspect_filter` (string)
- `category_ids` (string)
- `charity_ids` (string)
- `fieldgroups` (string)
- `filter` (string)
- `limit` (string)
- `offset` (string)
- `sort` (string)
- `image` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Content-Type` (string)
- `Accept-Language` (string)

### getitem

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `fieldgroups` (string)
- `quantity_for_shipping_estimate` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Accept-Language` (string)

### getitembylegacyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fieldgroups` (string)
- `legacy_item_id` (string)
- `legacy_variation_id` (string)
- `legacy_variation_sku` (string)
- `quantity_for_shipping_estimate` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Accept-Language` (string)

### getitems

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_ids` (string)
- `item_group_ids` (string)
- `quantity_for_shipping_estimate` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Accept-Language` (string)

### getitemsbyitemgroup

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fieldgroups` (string)
- `item_group_id` (string)
- `quantity_for_shipping_estimate` (string)
- `X-EBAY-C-ENDUSERCTX` (string)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Accept-Language` (string)

### checkcompatibility

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `compatibilityProperties` (array)
- `X-EBAY-C-MARKETPLACE-ID` (string)
- `Content-Type` (string)
- `Accept-Language` (string)
