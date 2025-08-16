import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postquerylandesrecht_lgblno",
  "toolDescription": "OgdSearchResult/OgdDocumentReference [{Data}, ...]",
  "baseUrl": "https://data.bka.gv.at/ris/api/v2.6",
  "path": "/Landesrecht#LgblNO",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool