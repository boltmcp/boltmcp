import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_bppuycgq_openapi_json_get",
  "toolDescription": "Get Openapi Bppuycgq",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool