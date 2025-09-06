import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "http_call_demos_http_call_post",
  "toolDescription": "Http Call",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/http-call",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool