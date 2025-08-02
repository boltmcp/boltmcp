import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_near_point",
  "toolDescription": "Recherche géographique",
  "baseUrl": "https://recherche-entreprises.api.gouv.fr",
  "path": "/near_point",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lat": "lat",
      "long": "long",
      "radius": "radius",
      "activite_principale": "activite_principale",
      "section_activite_principale": "section_activite_principale",
      "limite_matching_etablissements": "limite_matching_etablissements",
      "minimal": "minimal",
      "include": "include",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool