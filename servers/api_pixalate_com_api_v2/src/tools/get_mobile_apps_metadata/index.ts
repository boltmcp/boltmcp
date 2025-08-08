import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_mobile_apps_metadata",
  "toolDescription": "The purpose of this API is to provide metadata information for mobile applications in general. The response is a JSON formatted object containing the current user's quota state and the date the mobile applications database was last updated.",
  "baseUrl": "https://api.pixalate.com/api/v2",
  "path": "/mrt/apps",
  "method": "get",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pretty": "pretty"
    }
  },
  inputParamsSchema
}

export default tool