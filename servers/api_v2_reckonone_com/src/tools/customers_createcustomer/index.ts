import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_createcustomer",
  "toolDescription": "Creates a new customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers",
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
      "organisationName": "organisationName",
      "branch": "branch",
      "notes": "notes",
      "businessNumber1": "businessNumber1",
      "businessNumber2": "businessNumber2",
      "businessNumber": "businessNumber",
      "status": "status",
      "addresses": "addresses",
      "phoneNumbers": "phoneNumbers",
      "electronicAddresses": "electronicAddresses",
      "entityTypes": "entityTypes",
      "creditLimit": "creditLimit",
      "paymentTerms": "paymentTerms",
      "transactionPassword": "transactionPassword",
      "customFields": "customFields",
      "excludeFromInvoiceReminders": "excludeFromInvoiceReminders"
    }
  },
  inputParamsSchema
}

export default tool