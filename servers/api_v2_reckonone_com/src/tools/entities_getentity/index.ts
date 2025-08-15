import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "entities_getentity",
  "toolDescription": "Gets an entity.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/entities/{entityId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "entityId": "entityId"
    }
  },
  inputParamsSchema
}

export default tool