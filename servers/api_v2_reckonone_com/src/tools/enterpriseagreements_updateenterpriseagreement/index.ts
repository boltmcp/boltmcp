import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "enterpriseagreements_updateenterpriseagreement",
  "toolDescription": "Update the given enterprise agreement into the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/enterpriseagreements/{enterpriseAgreementId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "enterpriseAgreementId": "enterpriseAgreementId"
    },
    "body": {
      "name": "name",
      "classifications": "classifications"
    }
  },
  inputParamsSchema
}

export default tool