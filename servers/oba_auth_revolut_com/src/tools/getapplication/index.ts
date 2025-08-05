import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapplication",
  "toolDescription": "Get an application",
  "baseUrl": "https://oba-auth.revolut.com",
  "path": "/register/{ClientId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "ClientId": "ClientId"
    }
  },
  inputParamsSchema
}

export default tool