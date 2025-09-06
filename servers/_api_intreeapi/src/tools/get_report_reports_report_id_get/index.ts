import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_report_reports_report_id_get",
  "toolDescription": "Get Report",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/reports/{report_id}",
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
      "report_id": "report_id"
    },
    "query": {
      "embed_object": "embed_object"
    }
  },
  inputParamsSchema
}

export default tool