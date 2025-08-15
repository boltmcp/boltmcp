import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "employees_deleteemployee",
  "toolDescription": "Deletes an existing employee.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/employees/{employeeId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "employeeId": "employeeId"
    }
  },
  inputParamsSchema
}

export default tool