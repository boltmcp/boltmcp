import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postqueryjudikatur_normenliste",
  "toolDescription": "OgdSearchResult/OgdDocumentReference [{Data}, ...]",
  "baseUrl": "https://data.bka.gv.at/ris/api/v2.6",
  "path": "/Judikatur#Normenliste\"",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool