import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "markitdown_api_markitdown_post",
  "toolDescription": "Markitdown",
  "baseUrl": "https://api.example.com",
  "path": "/api/markitdown",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool