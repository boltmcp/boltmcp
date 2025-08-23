import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_contact_create",
  "toolDescription": "Create a contact",
  "baseUrl": "/external-api",
  "path": "/v1/contact-create",
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
      "existingContact": "existingContact",
      "shouldNumberLookup": "shouldNumberLookup"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool