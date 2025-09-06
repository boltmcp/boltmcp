import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_rf23qbri_openapi_json_get",
  "toolDescription": "Get Openapi Rf23Qbri",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.5/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool