import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_imports",
  "toolDescription": "Add Import Data",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/imports",
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
    "body": {
      "importType": "importType",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool