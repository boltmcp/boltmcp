import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_business_member_business_members_post",
  "toolDescription": "Create Business Member",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/business-members",
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
      "business_id": "business_id",
      "emails": "emails",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool