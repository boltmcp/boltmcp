import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_periodic_period_year_month_day_",
  "toolDescription": "Delete the periodic note for the specified period and date.",
  "baseUrl": "https://{host}:{port}",
  "path": "/periodic/{period}/{year}/{month}/{day}/",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool