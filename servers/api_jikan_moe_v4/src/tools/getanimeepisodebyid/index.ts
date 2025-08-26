import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getanimeepisodebyid",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/anime/{id}/episodes/{episode}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "episode": "episode"
    }
  },
  inputParamsSchema
}

export default tool