import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rate_limit_demos_rate_limit_get",
  "toolDescription": "Rate Limit",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/rate-limit",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool