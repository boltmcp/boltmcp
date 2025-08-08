import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "batch_get_mobile_apps_data",
  "toolDescription": "<p>The purpose of this API is to provide risk ratings and reputational data across thousands of mobile applications in a batch mode.</p> <p>Posted data should be in CSV format where each line consists of a single field which is the Bundle I",
  "baseUrl": "https://api.pixalate.com/api/v2",
  "path": "/mrt/apps",
  "method": "post",
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