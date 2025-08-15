import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_patchprojectitem",
  "toolDescription": "Updates selected fields of an existing project item within an existing project.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}/items/{lineId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId",
      "lineId": "lineId"
    },
    "body": {
      "item": "item",
      "projectRate": "projectRate"
    }
  },
  inputParamsSchema
}

export default tool