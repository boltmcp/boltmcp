import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hubs_internal_hubs_get",
  "toolDescription": "Get Hubs",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/hubs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "hub_id": "hub_id",
      "embed_org": "embed_org"
    }
  },
  inputParamsSchema
}

export default tool