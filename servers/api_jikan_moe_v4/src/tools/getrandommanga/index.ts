import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrandommanga",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/random/manga",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool