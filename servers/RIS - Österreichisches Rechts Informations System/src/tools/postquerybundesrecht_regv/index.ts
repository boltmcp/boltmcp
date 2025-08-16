import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postquerybundesrecht_regv",
  "toolDescription": "OgdSearchResult/OgdDocumentReference [{Data}, ...]",
  "baseUrl": "https://data.bka.gv.at/ris/api/v2.6",
  "path": "/Bundesrecht#RegV",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool