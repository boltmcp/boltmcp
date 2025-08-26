import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrandomusers",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/random/users",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool