import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ledgeraccounts_patchledgeraccount",
  "toolDescription": "Updates selected fields of an existing ledger account.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/ledgeraccounts/{ledgerAccountId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "ledgerAccountId": "ledgerAccountId"
    },
    "query": {
      "ExternalResourceId": "ExternalResourceId",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "parentLedgerAccount": "parentLedgerAccount",
      "sortOrder": "sortOrder",
      "status": "status",
      "defaultTaxRate": "defaultTaxRate",
      "accountCode": "accountCode",
      "exportCode": "exportCode",
      "bankAccount": "bankAccount",
      "creditAccount": "creditAccount"
    }
  },
  inputParamsSchema
}

export default tool