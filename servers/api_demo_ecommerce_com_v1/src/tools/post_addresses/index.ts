import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_addresses",
  "toolDescription": "Add a new address",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/addresses",
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
      "line1": "line1",
      "line2": "line2",
      "city": "city",
      "state": "state",
      "postal_code": "postal_code",
      "country": "country"
    }
  },
  inputParamsSchema
}

export default tool