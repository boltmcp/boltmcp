import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_mobile_app_data",
  "toolDescription": "The purpose of this API is to provide risk ratings and reputational data for mobile applications. The response is a JSON formatted object containing a list of app information partitioned by region and device.",
  "baseUrl": "https://api.pixalate.com/api/v2",
  "path": "/mrt/apps/{appId}",
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
    "path": {
      "appId": "appId"
    },
    "query": {
      "widget": "widget",
      "region": "region",
      "device": "device",
      "pretty": "pretty"
    }
  },
  inputParamsSchema
}

export default tool