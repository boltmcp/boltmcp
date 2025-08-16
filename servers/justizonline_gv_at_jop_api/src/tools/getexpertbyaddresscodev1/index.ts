import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexpertbyaddresscodev1",
  "toolDescription": "Get expert by addressCode",
  "baseUrl": "https://justizonline.gv.at/jop/api",
  "path": "/v1/experts/{addressCode}",
  "method": "get",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "addressCode": "addressCode"
    }
  },
  inputParamsSchema
}

export default tool