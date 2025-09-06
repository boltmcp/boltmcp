import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "version_check_version_get",
  "toolDescription": "Version Check",
  "baseUrl": "/api/intreeapi",
  "path": "/version",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool