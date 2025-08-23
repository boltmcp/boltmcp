import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_contact_update",
  "toolDescription": "Updates a contact",
  "baseUrl": "/external-api",
  "path": "/v1/contact-update",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "shouldNumberLookup": "shouldNumberLookup"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool