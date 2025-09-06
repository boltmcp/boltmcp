import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "alive_check_alive_get",
  "toolDescription": "Alive Check",
  "baseUrl": "/api/intreeapi",
  "path": "/alive",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool