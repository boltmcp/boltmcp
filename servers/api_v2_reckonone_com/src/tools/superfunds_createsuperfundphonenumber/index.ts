import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_createsuperfundphonenumber",
  "toolDescription": "Adds a new phone number to an existing super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/phoneNumbers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId"
    },
    "body": {
      "countryCode": "countryCode",
      "areaCode": "areaCode",
      "number": "number",
      "extension": "extension",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool