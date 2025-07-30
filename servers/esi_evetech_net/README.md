# @open-mcp/esi_evetech_net

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "esi_evetech_net": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/esi_evetech_net@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/esi_evetech_net@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add esi_evetech_net \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add esi_evetech_net \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add esi_evetech_net \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "esi_evetech_net": {
      "command": "npx",
      "args": ["-y", "@open-mcp/esi_evetech_net"],
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

### getalliances

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getalliancesallianceid

**Environment variables**

No environment variables required

**Input schema**

- `alliance_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getalliancesallianceidcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `alliance_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getalliancesallianceidcontactslabels

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `alliance_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getalliancesallianceidcorporations

**Environment variables**

No environment variables required

**Input schema**

- `alliance_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getalliancesallianceidicons

**Environment variables**

No environment variables required

**Input schema**

- `alliance_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharactersaffiliation

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacterid

**Environment variables**

No environment variables required

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridagentsresearch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridassets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridassetslocations

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridassetsnames

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridattributes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridblueprints

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcalendar

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `from_event` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcalendareventid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `event_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putcharacterscharacteridcalendareventid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `event_id` (integer)
- `response` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcalendareventidattendees

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `event_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridclones

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletecharacterscharacteridcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `contact_ids` (array)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `label_ids` (array)
- `standing` (number)
- `watched` (boolean)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putcharacterscharacteridcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `label_ids` (array)
- `standing` (number)
- `watched` (boolean)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcontactslabels

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcontracts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcontractscontractidbids

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `contract_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcontractscontractiditems

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `contract_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridcorporationhistory

**Environment variables**

No environment variables required

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridcspa

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridfatigue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridfittings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridfittings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `description` (string)
- `items` (array)
- `name` (string)
- `ship_type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletecharacterscharacteridfittingsfittingid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `fitting_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridfleet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridfwstats

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridimplants

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridindustryjobs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `include_completed` (boolean)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridkillmailsrecent

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridlocation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridloyaltypoints

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmail

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `labels` (array)
- `last_mail_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridmail

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `approved_cost` (integer)
- `body` (string)
- `recipients` (array)
- `subject` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmaillabels

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcharacterscharacteridmaillabels

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `color` (string)
- `name` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletecharacterscharacteridmaillabelslabelid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `label_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmaillists

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletecharacterscharacteridmailmailid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `mail_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmailmailid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `mail_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putcharacterscharacteridmailmailid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `mail_id` (integer)
- `labels` (array)
- `read` (boolean)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmedals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridmining

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridnotifications

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridnotificationscontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridonline

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridorders

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridordershistory

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridplanets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridplanetsplanetid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `planet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridportrait

**Environment variables**

No environment variables required

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridroles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridsearch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `categories` (array)
- `search` (string)
- `strict` (boolean)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridship

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridskillqueue

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridskills

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridstandings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridtitles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridwallet

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridwalletjournal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcharacterscharacteridwallettransactions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `character_id` (integer)
- `from_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcontractspublicbidscontractid

**Environment variables**

No environment variables required

**Input schema**

- `contract_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcontractspublicitemscontractid

**Environment variables**

No environment variables required

**Input schema**

- `contract_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcontractspublicregionid

**Environment variables**

No environment variables required

**Input schema**

- `region_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationcorporationidminingextractions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationcorporationidminingobservers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationcorporationidminingobserversobserverid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `observer_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationsnpccorps

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationid

**Environment variables**

No environment variables required

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidalliancehistory

**Environment variables**

No environment variables required

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidassets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcorporationscorporationidassetslocations

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postcorporationscorporationidassetsnames

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidblueprints

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontacts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontactslabels

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontainerslogs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontracts

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontractscontractidbids

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contract_id` (integer)
- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcontractscontractiditems

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contract_id` (integer)
- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidcustomsoffices

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationiddivisions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidfacilities

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidfwstats

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidicons

**Environment variables**

No environment variables required

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidindustryjobs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `include_completed` (boolean)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidkillmailsrecent

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmedals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmedalsissued

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmembers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmemberslimit

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmemberstitles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidmembertracking

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidorders

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidordershistory

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidroles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidroleshistory

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidshareholders

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidstandings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidstarbases

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidstarbasesstarbaseid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `starbase_id` (integer)
- `system_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidstructures

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidtitles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidwallets

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidwalletsdivisionjournal

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `division` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getcorporationscorporationidwalletsdivisiontransactions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `corporation_id` (integer)
- `division` (integer)
- `from_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getdogmaattributes

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getdogmaattributesattributeid

**Environment variables**

No environment variables required

**Input schema**

- `attribute_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getdogmadynamicitemstypeiditemid

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (integer)
- `type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getdogmaeffects

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getdogmaeffectseffectid

**Environment variables**

No environment variables required

**Input schema**

- `effect_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfleetsfleetid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putfleetsfleetid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `is_free_move` (boolean)
- `motd` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfleetsfleetidmembers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postfleetsfleetidmembers

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `character_id` (integer)
- `role` (string)
- `squad_id` (integer)
- `wing_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletefleetsfleetidmembersmemberid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `member_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putfleetsfleetidmembersmemberid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `member_id` (integer)
- `role` (string)
- `squad_id` (integer)
- `wing_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletefleetsfleetidsquadssquadid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `squad_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putfleetsfleetidsquadssquadid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `squad_id` (integer)
- `name` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfleetsfleetidwings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postfleetsfleetidwings

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### deletefleetsfleetidwingswingid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `wing_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### putfleetsfleetidwingswingid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `wing_id` (integer)
- `name` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postfleetsfleetidwingswingidsquads

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fleet_id` (integer)
- `wing_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwleaderboards

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwleaderboardscharacters

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwleaderboardscorporations

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwstats

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwsystems

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getfwwars

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getincursions

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getindustryfacilities

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getindustrysystems

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getinsuranceprices

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getkillmailskillmailidkillmailhash

**Environment variables**

No environment variables required

**Input schema**

- `killmail_hash` (string)
- `killmail_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getloyaltystorescorporationidoffers

**Environment variables**

No environment variables required

**Input schema**

- `corporation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsgroups

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsgroupsmarketgroupid

**Environment variables**

No environment variables required

**Input schema**

- `market_group_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsprices

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsstructuresstructureid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `structure_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsregionidhistory

**Environment variables**

No environment variables required

**Input schema**

- `region_id` (integer)
- `type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsregionidorders

**Environment variables**

No environment variables required

**Input schema**

- `region_id` (integer)
- `order_type` (string)
- `page` (integer)
- `type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getmarketsregionidtypes

**Environment variables**

No environment variables required

**Input schema**

- `region_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getrouteorigindestination

**Environment variables**

No environment variables required

**Input schema**

- `destination` (integer)
- `origin` (integer)
- `avoid` (array)
- `connections` (array)
- `flag` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getsovereigntycampaigns

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getsovereigntymap

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getsovereigntystructures

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getstatus

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuiautopilotwaypoint

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `add_to_beginning` (boolean)
- `clear_other_waypoints` (boolean)
- `destination_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuiopenwindowcontract

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contract_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuiopenwindowinformation

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `target_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuiopenwindowmarketdetails

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuiopenwindownewmail

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `body` (string)
- `recipients` (array)
- `subject` (string)
- `to_corp_or_alliance_id` (integer)
- `to_mailing_list_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseancestries

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseasteroidbeltsasteroidbeltid

**Environment variables**

No environment variables required

**Input schema**

- `asteroid_belt_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversebloodlines

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversecategories

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversecategoriescategoryid

**Environment variables**

No environment variables required

**Input schema**

- `category_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseconstellations

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseconstellationsconstellationid

**Environment variables**

No environment variables required

**Input schema**

- `constellation_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversefactions

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversegraphics

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversegraphicsgraphicid

**Environment variables**

No environment variables required

**Input schema**

- `graphic_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversegroups

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversegroupsgroupid

**Environment variables**

No environment variables required

**Input schema**

- `group_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuniverseids

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversemoonsmoonid

**Environment variables**

No environment variables required

**Input schema**

- `moon_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### postuniversenames

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseplanetsplanetid

**Environment variables**

No environment variables required

**Input schema**

- `planet_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseraces

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseregions

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseregionsregionid

**Environment variables**

No environment variables required

**Input schema**

- `region_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniverseschematicsschematicid

**Environment variables**

No environment variables required

**Input schema**

- `schematic_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversestargatesstargateid

**Environment variables**

No environment variables required

**Input schema**

- `stargate_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversestarsstarid

**Environment variables**

No environment variables required

**Input schema**

- `star_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversestationsstationid

**Environment variables**

No environment variables required

**Input schema**

- `station_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversestructures

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversestructuresstructureid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `structure_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversesystemjumps

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversesystemkills

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversesystems

**Environment variables**

No environment variables required

**Input schema**

- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversesystemssystemid

**Environment variables**

No environment variables required

**Input schema**

- `system_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversetypes

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getuniversetypestypeid

**Environment variables**

No environment variables required

**Input schema**

- `type_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getwars

**Environment variables**

No environment variables required

**Input schema**

- `max_war_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getwarswarid

**Environment variables**

No environment variables required

**Input schema**

- `war_id` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)

### getwarswaridkillmails

**Environment variables**

No environment variables required

**Input schema**

- `war_id` (integer)
- `page` (integer)
- `Accept-Language` (string)
- `If-None-Match` (string)
- `X-Compatibility-Date` (string)
- `X-Tenant` (string)
