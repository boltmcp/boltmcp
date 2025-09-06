import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_noredis_demos_noredis_get",
  "toolDescription": "Demo Noredis",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/noredis",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool