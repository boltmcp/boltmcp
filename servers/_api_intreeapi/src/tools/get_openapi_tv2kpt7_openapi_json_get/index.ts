import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_openapi_tv2kpt7_openapi_json_get",
  "toolDescription": "Get Openapi  Tv2Kpt7",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.7/openapi.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool