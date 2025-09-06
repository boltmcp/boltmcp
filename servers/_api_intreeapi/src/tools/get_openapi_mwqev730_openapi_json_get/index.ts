import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_mwqev730_openapi_json_get",
  "toolDescription": "Get Openapi Mwqev730",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.2/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool