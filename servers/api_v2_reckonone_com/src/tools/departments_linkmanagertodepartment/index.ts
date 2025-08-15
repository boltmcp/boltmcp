import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_linkmanagertodepartment",
  "toolDescription": "Links a manager to a department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments/{departmentId}/managers/{employeeId}/link",
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