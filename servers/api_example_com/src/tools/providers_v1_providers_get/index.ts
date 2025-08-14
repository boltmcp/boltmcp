import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "providers_v1_providers_get",
  "toolDescription": "Providers",
  "baseUrl": "https://api.example.com",
  "path": "/v1/providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool