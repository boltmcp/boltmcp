import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_deleteprojectcustomer",
  "toolDescription": "Deletes an existing project customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}/customers/{lineId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId",
      "lineId": "lineId"
    }
  },
  inputParamsSchema
}

export default tool