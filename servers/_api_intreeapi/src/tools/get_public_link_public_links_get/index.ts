import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_public_link_public_links_get",
  "toolDescription": "Get Public Link",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/public-links",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "salt": "salt"
    }
  },
  inputParamsSchema
}

export default tool