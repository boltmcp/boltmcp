import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "model_info_v1_models_model_name_get",
  "toolDescription": "Model Info",
  "baseUrl": "https://api.example.com",
  "path": "/v1/models/{model_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "model_name": "model_name"
    }
  },
  inputParamsSchema
}

export default tool