# @open-mcp/recherche_entreprises_api_gouv_fr

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "recherche_entreprises_api_gouv_fr": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/recherche_entreprises_api_gouv_fr@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/recherche_entreprises_api_gouv_fr@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add recherche_entreprises_api_gouv_fr \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add recherche_entreprises_api_gouv_fr \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add recherche_entreprises_api_gouv_fr \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "recherche_entreprises_api_gouv_fr": {
      "command": "npx",
      "args": ["-y", "@open-mcp/recherche_entreprises_api_gouv_fr"],
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

### get_search

**Environment variables**

No environment variables required

**Input schema**

- `q` (string)
- `activite_principale` (string)
- `categorie_entreprise` (string)
- `code_collectivite_territoriale` (string)
- `convention_collective_renseignee` (boolean)
- `code_postal` (string)
- `code_commune` (string)
- `departement` (string)
- `region` (string)
- `epci` (string)
- `egapro_renseignee` (boolean)
- `est_achats_responsables` (boolean)
- `est_alim_confiance` (boolean)
- `est_association` (boolean)
- `est_bio` (boolean)
- `est_collectivite_territoriale` (boolean)
- `est_entrepreneur_individuel` (boolean)
- `est_entrepreneur_spectacle` (boolean)
- `est_ess` (boolean)
- `est_finess` (boolean)
- `est_organisme_formation` (boolean)
- `est_patrimoine_vivant` (boolean)
- `est_qualiopi` (boolean)
- `est_rge` (boolean)
- `est_siae` (boolean)
- `est_service_public` (boolean)
- `est_l100_3` (boolean)
- `est_societe_mission` (boolean)
- `est_uai` (boolean)
- `etat_administratif` (string)
- `id_convention_collective` (string)
- `id_finess` (string)
- `id_rge` (string)
- `id_uai` (string)
- `nature_juridique` (string)
- `section_activite_principale` (string)
- `tranche_effectif_salarie` (string)
- `nom_personne` (string)
- `prenoms_personne` (string)
- `date_naissance_personne_min` (string)
- `date_naissance_personne_max` (string)
- `type_personne` (string)
- `ca_min` (integer)
- `ca_max` (integer)
- `resultat_net_min` (integer)
- `resultat_net_max` (integer)
- `limite_matching_etablissements` (integer)
- `minimal` (boolean)
- `include` (string)
- `page` (integer)
- `per_page` (integer)

### get_near_point

**Environment variables**

No environment variables required

**Input schema**

- `lat` (number)
- `long` (number)
- `radius` (number)
- `activite_principale` (string)
- `section_activite_principale` (string)
- `limite_matching_etablissements` (integer)
- `minimal` (boolean)
- `include` (string)
- `page` (integer)
- `per_page` (integer)
