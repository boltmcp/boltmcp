import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_patchproject",
  "toolDescription": "Updates selected fields of an existing project.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/projects/{projectId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "projectId": "projectId"
    },
    "body": {
      "name": "name",
      "status": "status",
      "amountTaxStatus": "amountTaxStatus",
      "parentProject": "parentProject",
      "startDate": "startDate",
      "endDate": "endDate",
      "description": "description",
      "billingMethod": "billingMethod"
    }
  },
  inputParamsSchema
}

export default tool