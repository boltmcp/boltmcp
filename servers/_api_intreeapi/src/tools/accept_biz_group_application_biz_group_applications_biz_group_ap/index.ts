import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accept_biz_group_application_biz_group_applications_biz_group_ap",
  "toolDescription": "Accept Biz Group Application",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-group-applications/{biz_group_application_id}/accept",
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
      "biz_group_application_id": "biz_group_application_id"
    }
  },
  inputParamsSchema
}

export default tool