import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_dtt5mdcw_openapi_json_get",
  "toolDescription": "Get Openapi Dtt5Mdcw",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.6/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool