# @open-mcp/api_bnkbl_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_bnkbl_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_bnkbl_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_bnkbl_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_bnkbl_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_bnkbl_com \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_bnkbl_com \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_bnkbl_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_bnkbl_com"],
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

### gettoken

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### createclient

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### requestcontract

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)
- `product` (string)
- `signers` (array)

### uploadproofofaddress

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)
- `product` (string)

### submitkyb

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)
- `product` (string)
- `annual_revenue` (number)
- `incorporation_date` (string)
- `financial_institution` (boolean)
- `income_source` (string)
- `trading_name` (string)
- `industry` (string)
- `financing_frequency` (string)
- `financing_needed` (number)
- `comments` (string)
- `ultimate_beneficial_owners` (array)
- `directors` (array)
- `corporate_structure` (array)

### submitbankdata

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getcontractsigners

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)
- `product` (string)

### findclient

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `id` (string)
- `state` (string)
- `missing_bank_details` (boolean)
- `crn` (string)
- `product_id` (string)

### getclient

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `product_id` (string)

### importfinancial

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)

### getfinancingindicator

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `client_id` (string)

### getpricebreakdown

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `debtor_country_code` (string)
- `debtor_crn` (string)
- `issuer_country_code` (string)
- `issuer_crn` (string)
- `face_value` (number)
- `due_date` (string)

### createinvoice

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findinvoices

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (string)
- `offset` (string)
- `sort_by` (string)
- `descending` (string)
- `invoice_number` (string)
- `invoice_number[]` (string)
- `payment_reference` (string)
- `payment_reference[]` (string)
- `face_value_from` (string)
- `face_value_to` (string)
- `currency` (string)
- `currency[]` (string)
- `issuer_name_like` (string)
- `issuer_country[]` (string)
- `issuer_registration_number` (string)
- `issuer_registration_number[]` (string)
- `debtor_name_like` (string)
- `debtor_country[]` (string)
- `debtor_registration_number` (string)
- `debtor_registration_number[]` (string)

### getinvoice

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### cancelinvoice

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getcreditpricebreakdown

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `country` (string)
- `registration_number` (string)

### createcredit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findcredits

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (string)
- `offset` (string)
- `sort_by` (string)
- `descending` (string)
- `id[]` (string)
- `number[]` (string)
- `state[]` (string)
- `amount_from` (string)
- `amount_to` (string)
- `currency[]` (string)
- `installments` (string)
- `client_id[]` (string)

### getcredit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### cancelcredit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### getpayablespricebreakdown

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `financing_amount` (number)
- `repayment_method` (string)

### submitpayables

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findpayables

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `limit` (string)
- `offset` (string)
- `sort_by` (string)
- `descending` (string)
- `id[]` (string)
- `state[]` (string)
- `client_id[]` (string)
- `total_requested_amount_from` (string)
- `total_requested_amount_to` (string)
- `currency[]` (string)

### getpayabledetails

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### uploadinvoicepayablefile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### approverepaymentplan

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)

### declinerepaymentplan

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `decline_reason` (string)

### getbalances

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `account_id` (string)

### findcashtransactions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `account_id` (string)
- `start_date` (string)
- `end_date` (string)

### findtrades

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `account_id` (string)
- `limit` (string)
- `offset` (string)
- `start_date` (string)
- `end_date` (string)

### findpositions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `account_id` (string)
- `limit` (string)
- `offset` (string)
- `start_date` (string)
- `end_date` (string)

### findoverdue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `account_id` (string)
- `limit` (string)
- `offset` (string)
- `start_date` (string)
- `end_date` (string)
