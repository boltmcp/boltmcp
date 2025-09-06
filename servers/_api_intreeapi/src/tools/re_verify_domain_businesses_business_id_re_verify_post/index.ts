import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "re_verify_domain_businesses_business_id_re_verify_post",
  "toolDescription": "Re Verify Domain",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/businesses/{business_id}/re-verify",
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
      "business_id": "business_id"
    },
    "body": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool