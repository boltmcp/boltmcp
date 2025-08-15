import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_patchclassification",
  "toolDescription": "Updates selected fields of an existing classification.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications/{classificationId}",
  "method": "patch",
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