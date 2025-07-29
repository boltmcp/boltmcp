import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_resource_doctype_",
  "toolDescription": "Get a list of documents",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/resource/{DocType}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "DocType": "DocType"
    },
    "query": {
      "fields": "fields",
      "filters": "filters",
      "limit_page_length": "limit_page_length",
      "limit_start": "limit_start"
    }
  },
  inputParamsSchema
}

export default tool