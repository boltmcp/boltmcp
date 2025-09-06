import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_djgzm3xo_openapi_json_get",
  "toolDescription": "Get Openapi Djgzm3Xo",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool