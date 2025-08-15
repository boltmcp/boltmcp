import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reports_getpayrolltransactionssummaryreportpost",
  "toolDescription": "Gets the payroll transactions summary report.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/reports/payrollTransactionsSummary",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "parameters": "parameters",
      "format": "format",
      "download": "download"
    }
  },
  inputParamsSchema
}

export default tool