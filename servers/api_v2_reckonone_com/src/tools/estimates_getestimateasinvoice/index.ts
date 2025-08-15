import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_getestimateasinvoice",
  "toolDescription": "Gets an estimate after converting it to an invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}/asInvoice",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId"
    }
  },
  inputParamsSchema
}

export default tool