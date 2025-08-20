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
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
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

### evmaerov2feemetrics

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)

### evmaerov2pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `apr_days_annualized` (integer)

### evmaerov2poolvolume

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)

### evmaerov2pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### evmaerov2providerpositions

**Environment variables**

- `X_API_KEY`

**Input schema**

- `wallet_address` (string)

### evmaerov2providersummary

**Environment variables**

- `X_API_KEY`

**Input schema**

- `wallet_address` (string)

### evmaerov2providers

**Environment variables**

- `X_API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### evmaerov3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmaerov3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### evmalienv3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmalienv3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### evmchains

**Environment variables**

- `X_API_KEY`

**Input schema**

No input parameters

### evmclonesv3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmclonesv3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### evmdexes

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)

### evmpanv3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmpanv3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### evmpricecurrent

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `chain_id` (integer)

### evmpricehour

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `hours` (integer)

### evmsushiv3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmsushiv3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### evmtokens

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)

### evmtvlstatus

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `wallet_address` (string)
- `whitelisted` (boolean)

### evmtvltop

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `limit` (integer)
- `offset` (integer)

### evmuniv3pool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `pool_address` (string)

### evmuniv3pools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `chain_id` (integer)
- `token_address` (string)
- `order_asc` (string)
- `order_desc` (string)

### solanaholdertokenbalances

**Environment variables**

- `X_API_KEY`

**Input schema**

- `wallet_address` (string)
- `limit` (integer)
- `offset` (integer)

### solanalatestblock

**Environment variables**

- `X_API_KEY`

**Input schema**

No input parameters

### solanameteoradlmmpoolinfo

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)

### solanameteoradlmmpoolmulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_addresses` (string)

### solanameteoradlmmpools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### solanaohlcvbasequote

**Environment variables**

- `X_API_KEY`

**Input schema**

- `base_address` (string)
- `quote_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `interval` (string)

### solanaohlcvpool

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `interval` (string)

### solanaohlcvtoken

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `interval` (string)

### solanaorcapoolinfo

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)

### solanaorcapoolmulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_addresses` (string)

### solanaorcapools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `dex` (string)

### solanaorcapoolsfeemetrics

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `days` (integer)

### solanaorcapoolsfeeranges

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `days` (integer)

### solanaorcapoolshistoricaldata

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `days` (integer)

### solanapoolsliquiditymap

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `resolution` (integer)

### solana_pooltransactions

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `days` (integer)
- `limit` (integer)
- `offset` (integer)

### solanapooltransactionstimebounded

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `limit` (integer)
- `offset` (integer)

### solanapricecurrent

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)

### solana_pricehour

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `interval` (string)
- `limit` (integer)
- `offset` (integer)

### solanapricemulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_addresses` (string)

### solanaapiv1solanapriceunix

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `unixtime` (integer)

### solanapricevolumemulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_addresses` (string)
- `timeframe` (string)

### solanapricevolumesingle

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `timeframe` (string)

### solanaraydiumclmmpoolinfo

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_address` (string)

### solanaraydiumclmmpoolmulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `pool_addresses` (string)

### solanaraydiumclmmpools

**Environment variables**

- `X_API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### solanatokendetails

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)

### solanatokendetailsmulti

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_addresses` (string)

### solanatokenmintburntransactions

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `limit` (integer)
- `offset` (integer)
- `order_asc` (string)
- `order_desc` (string)

### solanatokenpoolsearch

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `limit` (integer)
- `offset` (integer)

### solana_tokentransactions

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `days` (integer)
- `tx_type` (string)
- `dex` (string)
- `pool_address` (string)
- `min_value_usd` (number)
- `limit` (integer)
- `offset` (integer)

### solanatokentransactionstimebounded

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `limit` (integer)
- `offset` (integer)

### listsolanatokens

**Environment variables**

- `X_API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### solanatokensholderdistributionovertime

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `interval` (integer)
- `start_block` (integer)
- `end_block` (integer)

### listlatestsolanatokenholders

**Environment variables**

- `X_API_KEY`

**Input schema**

- `program_id` (string)
- `limit` (integer)
- `offset` (integer)

### solanatokenholdersovertime

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `interval` (integer)
- `start_block` (integer)
- `end_block` (integer)

### solanatokenssecuirty

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)

### solanatradestatistics

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_addresses` (string)
- `timeframe` (string)

### solanatradersleaderboard

**Environment variables**

- `X_API_KEY`

**Input schema**

- `token_address` (string)
- `interval` (string)

### solanatrendingtokens

**Environment variables**

- `X_API_KEY`

**Input schema**

- `order_by` (string)
- `limit` (integer)
- `offset` (integer)

### solanawalletbalancehistory

**Environment variables**

- `X_API_KEY`

**Input schema**

- `wallet_address` (string)
- `token_address` (string)
- `after_time` (integer)
- `before_time` (integer)
- `limit` (integer)
- `offset` (integer)
- `order_asc` (string)
- `order_desc` (string)

### stats

**Environment variables**

- `X_API_KEY`

**Input schema**

No input parameters
