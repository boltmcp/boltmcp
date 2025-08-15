import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_patchprojectsupplier",
  "toolDescription": "Updates selected fields of an existing project supplier within an existing project.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}/suppliers/{lineId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId",
      "lineId": "lineId"
    },
    "body": {
      "supplier": "supplier"
    }
  },
  inputParamsSchema
}

export default tool