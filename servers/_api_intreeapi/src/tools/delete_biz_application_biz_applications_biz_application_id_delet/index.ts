import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_biz_application_biz_applications_biz_application_id_delet",
  "toolDescription": "Delete Biz Application",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-applications/{biz_application_id}",
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
      "biz_application_id": "biz_application_id"
    }
  },
  inputParamsSchema
}

export default tool