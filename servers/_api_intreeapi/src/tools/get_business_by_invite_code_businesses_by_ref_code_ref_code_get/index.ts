import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_business_by_invite_code_businesses_by_ref_code_ref_code_get",
  "toolDescription": "Get Business By Invite Code",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/by-ref-code/{ref_code}",
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
      "ref_code": "ref_code"
    }
  },
  inputParamsSchema
}

export default tool