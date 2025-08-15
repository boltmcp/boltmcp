import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_patchdepartment",
  "toolDescription": "Updates selected fields of an existing department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments/{departmentId}",
  "method": "patch",
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
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool