import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "heartbeat_get",
  "toolDescription": "Reckon One API heartbeat.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/heartbeat",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool