import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_resource_doctype_documentname_",
  "toolDescription": "Delete a specific document",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/resource/{DocType}/{DocumentName}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "DocType": "DocType",
      "DocumentName": "DocumentName"
    }
  },
  inputParamsSchema
}

export default tool