import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_periodic_period_",
  "toolDescription": "Append content to the current periodic note for the specified period.",
  "baseUrl": "https://{host}:{port}",
  "path": "/periodic/{period}/",
  "method": "post",
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