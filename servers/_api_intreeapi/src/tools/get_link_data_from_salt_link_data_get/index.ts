import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_link_data_from_salt_link_data_get",
  "toolDescription": "Get Link Data From Salt",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/link-data",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "salt": "salt"
    }
  },
  inputParamsSchema
}

export default tool