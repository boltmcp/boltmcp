import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "models_api_provider_models_get",
  "toolDescription": "Models",
  "baseUrl": "https://api.example.com",
  "path": "/api/{provider}/models",
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
    "path": {
      "provider": "provider"
    }
  },
  inputParamsSchema
}

export default tool