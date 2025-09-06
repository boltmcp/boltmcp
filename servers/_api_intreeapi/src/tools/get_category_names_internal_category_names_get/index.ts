import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_category_names_internal_category_names_get",
  "toolDescription": "Get Category Names",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/category/names",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "category_id": "category_id",
      "name": "name",
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool