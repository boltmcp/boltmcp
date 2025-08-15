import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_updateclassification",
  "toolDescription": "Updates an existing classification.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications/{classificationId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "classificationId": "classificationId"
    },
    "query": {
      "ExternalResourceId": "ExternalResourceId",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "status": "status",
      "isDefault": "isDefault",
      "parentClassification": "parentClassification"
    }
  },
  inputParamsSchema
}

export default tool