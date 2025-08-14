import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_root_v1_v1_get",
  "toolDescription": "Read Root V1",
  "baseUrl": "https://api.example.com",
  "path": "/v1",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool