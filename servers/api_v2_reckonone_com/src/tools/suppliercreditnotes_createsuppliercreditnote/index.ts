import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_createsuppliercreditnote",
  "toolDescription": "Creates a new supplier credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "supplier": "supplier",
      "supplierCreditNoteDate": "supplierCreditNoteDate",
      "amountTaxStatus": "amountTaxStatus",
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "lineItems": "lineItems",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool