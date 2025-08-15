import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_getproject",
  "toolDescription": "Gets a project.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId"
    }
  },
  inputParamsSchema
}

export default tool