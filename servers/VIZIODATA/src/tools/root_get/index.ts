import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "root_get",
  "toolDescription": "Root",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool