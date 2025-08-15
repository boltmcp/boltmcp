import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchpayrollsettings",
  "toolDescription": "Updates selected fields of a book's payroll settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/payroll",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "isStpV2Enabled": "isStpV2Enabled",
      "isPreparingForStpV2": "isPreparingForStpV2",
      "legalContact": "legalContact",
      "payrollSetup": "payrollSetup",
      "defaultAccounts": "defaultAccounts",
      "defaultPayments": "defaultPayments",
      "automaticPayrollPayments": "automaticPayrollPayments",
      "defaultBankAccounts": "defaultBankAccounts",
      "isReducingOteHoursEnabled": "isReducingOteHoursEnabled"
    }
  },
  inputParamsSchema
}

export default tool