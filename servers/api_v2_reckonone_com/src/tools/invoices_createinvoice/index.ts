import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_createinvoice",
  "toolDescription": "Creates a new invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "ignoreWarnings": "ignoreWarnings"
    },
    "body": {
      "customer": "customer",
      "invoiceDate": "invoiceDate",
      "dueDate": "dueDate",
      "invoiceDiscountAmount": "invoiceDiscountAmount",
      "invoiceDiscountPercent": "invoiceDiscountPercent",
      "amountTaxStatus": "amountTaxStatus",
      "paymentTerms": "paymentTerms",
      "reference": "reference",
      "purchaseOrderNumber": "purchaseOrderNumber",
      "accountsReceivableLedgerAccount": "accountsReceivableLedgerAccount",
      "classification": "classification",
      "template": "template",
      "includeInInvoiceReminders": "includeInInvoiceReminders",
      "notes": "notes",
      "paymentDetails": "paymentDetails",
      "customFields": "customFields",
      "transactionLinks": "transactionLinks",
      "lineItems": "lineItems"
    }
  },
  inputParamsSchema
}

export default tool