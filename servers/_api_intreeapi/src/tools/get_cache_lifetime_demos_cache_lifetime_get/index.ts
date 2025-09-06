import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cache_lifetime_demos_cache_lifetime_get",
  "toolDescription": "Get Cache Lifetime",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/cache-lifetime",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool