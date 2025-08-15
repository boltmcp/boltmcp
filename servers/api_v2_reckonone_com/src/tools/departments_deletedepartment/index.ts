import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departments_deletedepartment",
  "toolDescription": "Deletes an existing department.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/departments/{departmentId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "departmentId": "departmentId"
    }
  },
  inputParamsSchema
}

export default tool