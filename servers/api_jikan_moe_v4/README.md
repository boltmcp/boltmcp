# @open-mcp/api_jikan_moe_v4

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_jikan_moe_v4": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_jikan_moe_v4@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_jikan_moe_v4@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_jikan_moe_v4 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_jikan_moe_v4 \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_jikan_moe_v4 \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_jikan_moe_v4": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_jikan_moe_v4"],
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

### getanimefullbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimebyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimecharacters

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimestaff

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimeepisodes

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getanimeepisodebyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `episode` (integer)

### getanimenews

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getanimeforum

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `filter` (string)

### getanimevideos

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimevideosepisodes

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getanimepictures

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimestatistics

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimemoreinfo

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimerecommendations

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimeuserupdates

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getanimereviews

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)
- `preliminary` (boolean)
- `spoilers` (boolean)

### getanimerelations

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimethemes

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimeexternal

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimestreaming

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharacterfullbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharacterbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharacteranime

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharactermanga

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharactervoiceactors

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getcharacterpictures

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getclubsbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getclubmembers

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getclubstaff

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getclubrelations

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getanimegenres

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)

### getmangagenres

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)

### getmagazines

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)

### getmangafullbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangabyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangacharacters

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmanganews

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getmangatopics

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `filter` (string)

### getmangapictures

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangastatistics

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangamoreinfo

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangarecommendations

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangauserupdates

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)

### getmangareviews

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)
- `page` (integer)
- `preliminary` (boolean)
- `spoilers` (boolean)

### getmangarelations

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getmangaexternal

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonfullbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonanime

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonvoices

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonmanga

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getpersonpictures

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getproducerbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getproducerfullbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getproducerexternal

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getrandomanime

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getrandommanga

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getrandomcharacters

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getrandompeople

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getrandomusers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getrecentanimerecommendations

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)

### getrecentmangarecommendations

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)

### getrecentanimereviews

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `preliminary` (boolean)
- `spoilers` (boolean)

### getrecentmangareviews

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `preliminary` (boolean)
- `spoilers` (boolean)

### getschedules

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `kids` (string)
- `sfw` (string)
- `unapproved` (boolean)
- `page` (integer)
- `limit` (integer)

### getanimesearch

**Environment variables**

No environment variables required

**Input schema**

- `unapproved` (boolean)
- `page` (integer)
- `limit` (integer)
- `q` (string)
- `type` (string)
- `score` (number)
- `min_score` (number)
- `max_score` (number)
- `status` (string)
- `rating` (string)
- `sfw` (boolean)
- `genres` (string)
- `genres_exclude` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)
- `producers` (string)
- `start_date` (string)
- `end_date` (string)

### getmangasearch

**Environment variables**

No environment variables required

**Input schema**

- `unapproved` (boolean)
- `page` (integer)
- `limit` (integer)
- `q` (string)
- `type` (string)
- `score` (number)
- `min_score` (number)
- `max_score` (number)
- `status` (string)
- `sfw` (boolean)
- `genres` (string)
- `genres_exclude` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)
- `magazines` (string)
- `start_date` (string)
- `end_date` (string)

### getpeoplesearch

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)

### getcharacterssearch

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)

### getuserssearch

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `gender` (string)
- `location` (string)
- `maxAge` (integer)
- `minAge` (integer)

### getuserbyid

**Environment variables**

No environment variables required

**Input schema**

- `id` (integer)

### getclubssearch

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `type` (string)
- `category` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)

### getproducers

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `q` (string)
- `order_by` (string)
- `sort` (string)
- `letter` (string)

### getseasonnow

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `sfw` (boolean)
- `unapproved` (boolean)
- `continuing` (boolean)
- `page` (integer)
- `limit` (integer)

### getseason

**Environment variables**

No environment variables required

**Input schema**

- `year` (integer)
- `season` (string)
- `filter` (string)
- `sfw` (boolean)
- `unapproved` (boolean)
- `continuing` (boolean)
- `page` (integer)
- `limit` (integer)

### getseasonslist

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getseasonupcoming

**Environment variables**

No environment variables required

**Input schema**

- `filter` (string)
- `sfw` (boolean)
- `unapproved` (boolean)
- `continuing` (boolean)
- `page` (integer)
- `limit` (integer)

### gettopanime

**Environment variables**

No environment variables required

**Input schema**

- `type` (string)
- `filter` (string)
- `rating` (string)
- `sfw` (boolean)
- `page` (integer)
- `limit` (integer)

### gettopmanga

**Environment variables**

No environment variables required

**Input schema**

- `type` (string)
- `filter` (string)
- `page` (integer)
- `limit` (integer)

### gettoppeople

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)

### gettopcharacters

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)

### gettopreviews

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `type` (string)
- `preliminary` (boolean)
- `spoilers` (boolean)

### getuserfullprofile

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserprofile

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserstatistics

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserfavorites

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserupdates

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserabout

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getuserhistory

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `type` (string)

### getuserfriends

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `page` (integer)

### getuseranimelist

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `status` (string)

### getusermangalist

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `status` (string)

### getuserreviews

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `page` (integer)

### getuserrecommendations

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `page` (integer)

### getuserclubs

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)
- `page` (integer)

### getuserexternal

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### getwatchrecentepisodes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getwatchpopularepisodes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getwatchrecentpromos

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)

### getwatchpopularpromos

**Environment variables**

No environment variables required

**Input schema**

No input parameters
