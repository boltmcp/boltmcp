import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_patchsuppliercreditnote",
  "toolDescription": "Updates selected fields of a supplier credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes/{supplierCreditNoteId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierCreditNoteId": "supplierCreditNoteId"
    },
    "body": {
      "supplier": "supplier",
      "supplierCreditNoteDate": "supplierCreditNoteDate",
      "amountTaxStatus": "amountTaxStatus",
      "status": "status",
      "reference": "reference",
      "classification": "classification",
      "template": "template",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool