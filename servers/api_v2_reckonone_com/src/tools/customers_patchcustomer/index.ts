import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_patchcustomer",
  "toolDescription": "Updates selected fields of an existing customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "query": {
      "ExternalResourceId": "ExternalResourceId",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    },
    "body": {
      "name": "name",
      "organisationName": "organisationName",
      "branch": "branch",
      "notes": "notes",
      "businessNumber1": "businessNumber1",
      "businessNumber2": "businessNumber2",
      "businessNumber": "businessNumber",
      "status": "status",
      "entityTypes": "entityTypes",
      "creditLimit": "creditLimit",
      "paymentTerms": "paymentTerms",
      "transactionPassword": "transactionPassword",
      "excludeFromInvoiceReminders": "excludeFromInvoiceReminders"
    }
  },
  inputParamsSchema
}

export default tool