import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "enterpriseagreements_getenterpriseagreement",
  "toolDescription": "Gets an enterprise agreement.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/enterpriseagreements/{enterpriseAgreementId}",
  "method": "get",
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