import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettoken",
  "toolDescription": "Get authentication token",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/oauth/token",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool