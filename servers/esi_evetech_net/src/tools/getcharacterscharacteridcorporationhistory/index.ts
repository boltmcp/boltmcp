import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcharacterscharacteridcorporationhistory",
  "toolDescription": "Get corporation history",
  "baseUrl": "https://esi.evetech.net",
  "path": "/characters/{character_id}/corporationhistory",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "character_id": "character_id"
    },
    "header": {
      "Accept-Language": "Accept-Language",
      "If-None-Match": "If-None-Match",
      "X-Compatibility-Date": "X-Compatibility-Date",
      "X-Tenant": "X-Tenant"
    }
  },
  inputParamsSchema
}

export default tool