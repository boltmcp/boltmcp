import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdogmadynamicitemstypeiditemid",
  "toolDescription": "Get dynamic item information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/dogma/dynamic/items/{type_id}/{item_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "item_id": "item_id",
      "type_id": "type_id"
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