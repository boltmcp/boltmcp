import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_deleteprojectitem",
  "toolDescription": "Deletes an existing project item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}/items/{lineId}",
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