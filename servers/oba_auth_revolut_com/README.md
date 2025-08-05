# @open-mcp/oba_auth_revolut_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "oba_auth_revolut_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/oba_auth_revolut_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/oba_auth_revolut_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
X_JWS_SIGNATURE='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add oba_auth_revolut_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --X_JWS_SIGNATURE=$X_JWS_SIGNATURE
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add oba_auth_revolut_com \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --X_JWS_SIGNATURE=$X_JWS_SIGNATURE
```

### Other

```bash
npx @open-mcp/config add oba_auth_revolut_com \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION \
  --X_JWS_SIGNATURE=$X_JWS_SIGNATURE
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "oba_auth_revolut_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/oba_auth_revolut_com"],
      "env": {"AUTHORIZATION":"...","X_JWS_SIGNATURE":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION` - gets sent to the API provider
- `X_JWS_SIGNATURE` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### createaccountaccessconsents

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountaccessconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### deleteaccountaccessconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccounts

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountidbalances

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountidbeneficiaries

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountiddirectdebits

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountidstandingorders

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getaccountsaccountidtransactions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `AccountId` (string)
- `fromBookingDateTime` (string)
- `toBookingDateTime` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticpaymentconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticpaymentconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getdomesticpaymentconsentsconsentidfundsconfirmation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticpayments

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticpaymentsdomesticpaymentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DomesticPaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticscheduledpaymentconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticscheduledpaymentconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticscheduledpayments

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticscheduledpaymentsdomesticscheduledpaymentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DomesticScheduledPaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticstandingorderconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticstandingorderconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createdomesticstandingorders

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getdomesticstandingordersdomesticstandingorderid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DomesticStandingOrderId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createfilepaymentconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getfilepaymentconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getfilepaymentconsentsconsentidfile

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createfilepaymentconsentsconsentidfile

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### createfilepayments

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getfilepaymentsfilepaymentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `FilePaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getfilepaymentsfilepaymentidreportfile

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `FilePaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalpaymentconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalpaymentconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getinternationalpaymentconsentsconsentidfundsconfirmation

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalpayments

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalpaymentsinternationalpaymentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `InternationalPaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalscheduledpaymentconsents

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalscheduledpaymentconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### getinternationalscheduledpaymentconsentsconsentidfundsconfirmati

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalscheduledpayments

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalscheduledpaymentsinternationalscheduledpaymentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `InternationalScheduledPaymentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalstandingorderconsents

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalstandingorderconsentsconsentid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ConsentId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### createinternationalstandingorders

**Environment variables**

- `AUTHORIZATION`
- `X_JWS_SIGNATURE`

**Input schema**

- `Data` (object)
- `Risk` (object)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-idempotency-key` (string)
- `x-jws-signature` (string)
- `x-customer-user-agent` (string)

### getinternationalstandingordersinternationalstandingorderid

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `InternationalStandingOrderId` (string)
- `x-fapi-financial-id` (string)
- `x-fapi-customer-last-logged-time` (string)
- `x-fapi-customer-ip-address` (string)
- `x-fapi-interaction-id` (string)
- `Authorization` (string)
- `x-customer-user-agent` (string)

### servers_distinguished_name

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getdistinguishedname

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### servers_register

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### registerapplication

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### servers_register_clientid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getapplication

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ClientId` (string)

### updateapplication

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ClientId` (string)

### deleteapplication

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `ClientId` (string)

### listdraftpayment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `from` (string)
- `to` (string)
- `limit` (integer)

### createdraftpayment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `scheduledDate` (string)
- `title` (string)
- `x-idempotency-key` (string)

### deletedraftpaymenttransfer

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DraftPaymentId` (string)
- `DraftPaymentTransferId` (string)

### finddraftpayment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DraftPaymentId` (string)

### deletedraftpayment

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `DraftPaymentId` (string)
