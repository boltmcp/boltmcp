import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_periodic_period_",
  "toolDescription": "Get current periodic note for the specified period.",
  "baseUrl": "https://{host}:{port}",
  "path": "/periodic/{period}/",
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
    "path": {
      "period": "period"
    }
  },
  inputParamsSchema
}

export default tool