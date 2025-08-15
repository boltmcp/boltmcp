import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "heartbeat_logtest",
  "toolDescription": "",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/heartbeat/logtest",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool