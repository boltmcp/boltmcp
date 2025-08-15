import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_updatedepartment",
  "toolDescription": "Updates an existing department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments/{departmentId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "departmentId": "departmentId"
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