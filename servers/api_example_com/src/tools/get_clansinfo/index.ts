import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_clansinfo",
  "toolDescription": "Get clan information",
  "baseUrl": "https://api.example.com",
  "path": "/survival/clans/{tag}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tag": "tag"
    },
    "query": {
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool