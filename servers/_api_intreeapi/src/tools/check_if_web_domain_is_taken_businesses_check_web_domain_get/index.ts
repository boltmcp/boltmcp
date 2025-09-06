import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_if_web_domain_is_taken_businesses_check_web_domain_get",
  "toolDescription": "Check If Web Domain Is Taken",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/check-web-domain",
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
    "query": {
      "web_domain": "web_domain",
      "suggestions_num": "suggestions_num"
    }
  },
  inputParamsSchema
}

export default tool