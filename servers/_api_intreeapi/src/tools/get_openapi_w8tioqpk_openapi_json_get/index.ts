import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_w8tioqpk_openapi_json_get",
  "toolDescription": "Get Openapi W8Tioqpk",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool