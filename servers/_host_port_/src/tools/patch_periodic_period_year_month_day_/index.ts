import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_periodic_period_year_month_day_",
  "toolDescription": "Partially update content in the periodic note for the specified period and date.",
  "baseUrl": "https://{host}:{port}",
  "path": "/periodic/{period}/{year}/{month}/{day}/",
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
      "year": "year",
      "month": "month",
      "day": "day",
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