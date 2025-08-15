import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_createclassification",
  "toolDescription": "Creates a new classification.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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