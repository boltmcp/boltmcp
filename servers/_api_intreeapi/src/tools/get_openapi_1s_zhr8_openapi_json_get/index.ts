import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_1s_zhr8_openapi_json_get",
  "toolDescription": "Get Openapi 1S-Zhr8",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.3/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool