import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_request_info_request_info_get",
  "toolDescription": "Get Request Info",
  "baseUrl": "/api/intreeapi",
  "path": "/request-info/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool