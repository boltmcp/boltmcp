# @open-mcp/opensubsonic

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "opensubsonic": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/opensubsonic@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/opensubsonic@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
APIKEY='...'
C='...'
F='...'
P='...'
S='...'
T='...'
U='...'
V='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add opensubsonic \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --APIKEY=$APIKEY \
  --C=$C \
  --F=$F \
  --P=$P \
  --S=$S \
  --T=$T \
  --U=$U \
  --V=$V
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add opensubsonic \
  .cursor/mcp.json \
  --APIKEY=$APIKEY \
  --C=$C \
  --F=$F \
  --P=$P \
  --S=$S \
  --T=$T \
  --U=$U \
  --V=$V
```

### Other

```bash
npx @open-mcp/config add opensubsonic \
  /path/to/client/config.json \
  --APIKEY=$APIKEY \
  --C=$C \
  --F=$F \
  --P=$P \
  --S=$S \
  --T=$T \
  --U=$U \
  --V=$V
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "opensubsonic": {
      "command": "npx",
      "args": ["-y", "@open-mcp/opensubsonic"],
      "env": {"APIKEY":"...","C":"...","F":"...","P":"...","S":"...","T":"...","U":"...","V":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `APIKEY` - gets sent to the API provider
- `C` - gets sent to the API provider
- `F` - gets sent to the API provider
- `P` - gets sent to the API provider
- `S` - gets sent to the API provider
- `T` - gets sent to the API provider
- `U` - gets sent to the API provider
- `V` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getaddchatmessage

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `message` (string)

### postaddchatmessage

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### changepassword

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)
- `password` (string)

### postchangepassword

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createbookmark

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `position` (integer)
- `comment` (string)

### postcreatebookmark

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `streamUrl` (string)
- `name` (string)
- `homepageUrl` (string)

### postcreateinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `playlistId` (string)
- `name` (string)
- `songId` (array)

### postcreateplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createpodcastchannel

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `url` (string)

### postcreatepodcastchannel

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (array)
- `description` (string)
- `expires` (integer)

### postcreateshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### createuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)
- `password` (string)
- `email` (string)
- `ldapAuthenticated` (boolean)
- `adminRole` (boolean)
- `settingsRole` (boolean)
- `streamRole` (boolean)
- `jukeboxRole` (boolean)
- `downloadRole` (boolean)
- `uploadRole` (boolean)
- `playlistRole` (boolean)
- `coverArtRole` (boolean)
- `commentRole` (boolean)
- `podcastRole` (boolean)
- `shareRole` (boolean)
- `videoConversionRole` (boolean)
- `musicFolderId` (array)

### postcreateuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deletebookmark

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeletebookmark

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deleteinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeleteinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deleteplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeleteplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deletepodcastchannel

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeletepodcastchannel

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deletepodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeletepodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deleteshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdeleteshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### deleteuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)

### postdeleteuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### download

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdownload

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### downloadpodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postdownloadpodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getalbum

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetalbum

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getalbuminfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetalbuminfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getalbuminfo2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetalbuminfo2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getalbumlist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `type` (string)
- `size` (integer)
- `offset` (integer)
- `fromYear` (integer)
- `toYear` (integer)
- `genre` (string)
- `musicFolderId` (string)

### postgetalbumlist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getalbumlist2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `type` (string)
- `size` (integer)
- `offset` (integer)
- `fromYear` (integer)
- `toYear` (integer)
- `genre` (string)
- `musicFolderId` (string)

### postgetalbumlist2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getartist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetartist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getartistinfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `count` (integer)
- `includeNotPresent` (boolean)

### postgetartistinfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getartistinfo2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `count` (integer)
- `includeNotPresent` (boolean)

### postgetartistinfo2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getartists

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `musicFolderId` (string)

### postgetartists

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getavatar

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)

### postgetavatar

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getbookmarks

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetbookmarks

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getcaptions

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `format` (string)

### postgetcaptions

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getchatmessages

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetchatmessages

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getcoverart

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `size` (integer)

### postgetcoverart

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getgenres

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetgenres

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getindexes

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `musicFolderId` (string)
- `ifModifiedSince` (integer)

### postgetindexes

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getinternetradiostations

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetinternetradiostations

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getlicense

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetlicense

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getlyrics

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `artist` (string)
- `title` (string)

### postgetlyrics

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getlyricsbysongid

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetlyricsbysongid

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getmusicdirectory

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetmusicdirectory

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getmusicfolders

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetmusicfolders

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getnewestpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `count` (integer)

### postgetnewestpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getnowplaying

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetnowplaying

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getopensubsonicextensions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### postgetopensubsonicextensions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### getplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getplaylists

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)

### postgetplaylists

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getplayqueue

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetplayqueue

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getplayqueuebyindex

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetplayqueuebyindex

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getpodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetpodcastepisode

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `includeEpisodes` (boolean)

### postgetpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getrandomsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `size` (integer)
- `genre` (string)
- `fromYear` (integer)
- `toYear` (integer)
- `musicFolderId` (string)

### postgetrandomsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getscanstatus

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetscanstatus

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getshares

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetshares

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getsimilarsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `count` (integer)

### postgetsimilarsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getsimilarsongs2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `count` (integer)

### postgetsimilarsongs2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getsong

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetsong

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getsongsbygenre

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `genre` (string)
- `count` (integer)
- `offset` (integer)
- `musicFolderId` (string)

### postgetsongsbygenre

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getstarred

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `musicFolderId` (string)

### postgetstarred

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getstarred2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `musicFolderId` (string)

### postgetstarred2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### gettopsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `count` (integer)

### postgettopsongs

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)

### postgetuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getusers

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetusers

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getvideoinfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)

### postgetvideoinfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### getvideos

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postgetvideos

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### hls_m3u8

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `bitRate` (integer)
- `audioTrack` (string)

### posthls_m3u8

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### jukeboxcontrol

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `action` (string)
- `index` (integer)
- `offset` (integer)
- `id` (array)
- `gain` (number)

### postjukeboxcontrol

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### ping

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postping

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### refreshpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### postrefreshpodcasts

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### saveplayqueue

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `current` (string)
- `position` (integer)

### postsaveplayqueue

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### saveplayqueuebyindex

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `currentIndex` (integer)
- `position` (integer)

### postsaveplayqueuebyindex

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### scrobble

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `time` (integer)
- `submission` (boolean)

### postscrobble

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### search

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `artist` (string)
- `album` (string)
- `title` (string)
- `any` (boolean)
- `count` (integer)
- `offset` (integer)
- `newerThan` (integer)

### postsearch

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### search2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `query` (string)
- `artistCount` (integer)
- `artistOffset` (integer)
- `albumCount` (integer)
- `albumOffset` (integer)
- `songCount` (integer)
- `songOffset` (integer)
- `musicFolderId` (string)

### postsearch2

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### search3

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `query` (string)
- `artistCount` (integer)
- `artistOffset` (integer)
- `albumCount` (integer)
- `albumOffset` (integer)
- `songCount` (integer)
- `songOffset` (integer)
- `musicFolderId` (string)

### postsearch3

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### setrating

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `rating` (integer)

### postsetrating

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### star

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (array)
- `albumId` (array)
- `artistId` (array)

### poststar

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### startscan

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### poststartscan

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### stream

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `maxBitRate` (integer)
- `format` (string)
- `timeOffset` (integer)
- `size` (string)
- `estimateContentLength` (boolean)
- `converted` (boolean)

### poststream

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### tokeninfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### posttokeninfo

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### unstar

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (array)
- `albumId` (array)
- `artistId` (array)

### postunstar

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### updateinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `streamUrl` (string)
- `name` (string)
- `homepageUrl` (string)

### postupdateinternetradiostation

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### updateplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `playlistId` (string)
- `name` (string)
- `comment` (string)
- `public` (boolean)
- `songIdToAdd` (array)
- `songIndexToRemove` (array)

### postupdateplaylist

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### updateshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `id` (string)
- `description` (string)
- `expires` (integer)

### postupdateshare

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters

### updateuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

- `username` (string)
- `password` (string)
- `email` (string)
- `ldapAuthenticated` (boolean)
- `adminRole` (boolean)
- `settingsRole` (boolean)
- `streamRole` (boolean)
- `jukeboxRole` (boolean)
- `downloadRole` (boolean)
- `uploadRole` (boolean)
- `coverArtRole` (boolean)
- `commentRole` (boolean)
- `podcastRole` (boolean)
- `shareRole` (boolean)
- `videoConversionRole` (boolean)
- `musicFolderId` (array)
- `maxBitRate` (integer)

### postupdateuser

**Environment variables**

- `APIKEY`
- `C`
- `F`
- `P`
- `S`
- `T`
- `U`
- `V`

**Input schema**

No input parameters
