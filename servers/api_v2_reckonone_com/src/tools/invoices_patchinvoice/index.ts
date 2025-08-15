import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_patchinvoice",
  "toolDescription": "Updates selected fields of an existing invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId"
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
      "status": "status",
      "paymentTerms": "paymentTerms",
      "reference": "reference",
      "purchaseOrderNumber": "purchaseOrderNumber",
      "accountsReceivableLedgerAccount": "accountsReceivableLedgerAccount",
      "classification": "classification",
      "template": "template",
      "includeInInvoiceReminders": "includeInInvoiceReminders",
      "notes": "notes",
      "paymentDetails": "paymentDetails"
    }
  },
  inputParamsSchema
}

export default tool