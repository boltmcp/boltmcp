import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_patchprojectcustomer",
  "toolDescription": "Updates selected fields of an existing project customer within an existing project.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}/customers/{lineId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId",
      "lineId": "lineId"
    },
    "body": {
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool