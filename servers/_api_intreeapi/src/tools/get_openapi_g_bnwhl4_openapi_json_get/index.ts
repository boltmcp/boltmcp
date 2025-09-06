import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_g_bnwhl4_openapi_json_get",
  "toolDescription": "Get Openapi G-Bnwhl4",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.1/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool