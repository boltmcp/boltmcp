import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deactivate_expired_bots_api_chila_deactivate_expired_bots_post",
  "toolDescription": "Deactivate Expired Bots",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/deactivate-expired-bots",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool