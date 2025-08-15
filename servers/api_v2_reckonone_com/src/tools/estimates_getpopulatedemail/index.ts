import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_getpopulatedemail",
  "toolDescription": "Gets an email template populated with details from the specified estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}/email",
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