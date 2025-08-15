import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchtaxsettings",
  "toolDescription": "Updates selected fields of a book's tax settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/tax",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "taxRegistered": "taxRegistered",
      "reportingBasis": "reportingBasis",
      "amountTaxStatus": "amountTaxStatus",
      "defaultSalesTaxLedgerAccount": "defaultSalesTaxLedgerAccount",
      "defaultPurchasesTaxLedgerAccount": "defaultPurchasesTaxLedgerAccount",
      "taxAmountEditable": "taxAmountEditable",
      "chooseAmountTaxStatus": "chooseAmountTaxStatus",
      "basSettings": "basSettings",
      "gstSettings": "gstSettings",
      "vatSettings": "vatSettings",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool