import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "employees_updateemployee",
  "toolDescription": "Updates an existing employee.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/employees/{employeeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "employeeId": "employeeId"
    },
    "body": {
      "name": "name",
      "firstName": "firstName",
      "surname": "surname",
      "notes": "notes",
      "businessNumber1": "businessNumber1",
      "businessNumber2": "businessNumber2",
      "status": "status",
      "addresses": "addresses",
      "phoneNumbers": "phoneNumbers",
      "electronicAddresses": "electronicAddresses"
    }
  },
  inputParamsSchema
}

export default tool