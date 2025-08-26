import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwatchpopularpromos",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/watch/promos/popular",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool