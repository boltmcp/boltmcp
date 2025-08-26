import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwatchrecentepisodes",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/watch/episodes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool