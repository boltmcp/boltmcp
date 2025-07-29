import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_resource_doctype_",
  "toolDescription": "Create a new document",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/resource/{DocType}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "DocType": "DocType"
    }
  },
  inputParamsSchema
}

export default tool