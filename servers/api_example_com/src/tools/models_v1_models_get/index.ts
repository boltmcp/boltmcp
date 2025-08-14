import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "models_v1_models_get",
  "toolDescription": "Models",
  "baseUrl": "https://api.example.com",
  "path": "/v1/models",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool