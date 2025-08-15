import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paytemplates_createpaytemplate",
  "toolDescription": "Creates a pay template.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paytemplates",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "enterpriseAgreement": "enterpriseAgreement",
      "award": "award",
      "classifications": "classifications"
    }
  },
  inputParamsSchema
}

export default tool