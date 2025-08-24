import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_periodic_period_",
  "toolDescription": "Partially update content in the current periodic note for the specified period.",
  "baseUrl": "https://{host}:{port}",
  "path": "/periodic/{period}/",
  "method": "patch",
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
    },
    "header": {
      "Operation": "Operation",
      "Target-Type": "Target-Type",
      "Target-Delimiter": "Target-Delimiter",
      "Target": "Target",
      "Trim-Target-Whitespace": "Trim-Target-Whitespace"
    }
  },
  inputParamsSchema
}

export default tool