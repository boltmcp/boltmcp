import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_unlinkdepartmentlinkedemployee",
  "toolDescription": "Unlinks an employee from a department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments/{departmentId}/employees/{employeeId}/unlink",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "departmentId": "departmentId",
      "employeeId": "employeeId"
    }
  },
  inputParamsSchema
}

export default tool