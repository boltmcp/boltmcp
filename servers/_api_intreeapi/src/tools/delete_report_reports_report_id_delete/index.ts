import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_report_reports_report_id_delete",
  "toolDescription": "Delete Report",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/reports/{report_id}",
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
      "report_id": "report_id"
    }
  },
  inputParamsSchema
}

export default tool