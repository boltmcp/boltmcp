import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_khukg2r_openapi_json_get",
  "toolDescription": "Get Openapi -Khukg2R",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.4/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool