import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_verification_application_verification_applications_post",
  "toolDescription": "Create Verification Application",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/verification-applications",
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
    "body": {
      "message": "message",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool