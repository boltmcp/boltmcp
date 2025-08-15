import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "enterpriseagreements_deleteenterpriseagreement",
  "toolDescription": "Deletes the given enterprise agreement out of the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/enterpriseagreements/{enterpriseAgreementId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "enterpriseAgreementId": "enterpriseAgreementId"
    }
  },
  inputParamsSchema
}

export default tool