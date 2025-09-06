import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "base_stats_stats_base_get",
  "toolDescription": "Base Stats",
  "baseUrl": "/api/intreeapi",
  "path": "/stats/base",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "date_start": "date_start",
      "date_stop": "date_stop"
    },
    "header": {
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool