import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_cmccooxr_openapi_json_get",
  "toolDescription": "Get Openapi Cmccooxr",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool