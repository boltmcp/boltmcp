import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_createdepartment",
  "toolDescription": "Creates a new department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "code": "code",
      "status": "status",
      "notes": "notes",
      "managers": "managers",
      "employees": "employees"
    }
  },
  inputParamsSchema
}

export default tool