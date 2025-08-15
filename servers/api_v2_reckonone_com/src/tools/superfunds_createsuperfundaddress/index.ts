import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_createsuperfundaddress",
  "toolDescription": "Adds a new address to an existing super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/addresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId"
    },
    "body": {
      "line1": "line1",
      "line2": "line2",
      "line3": "line3",
      "suburb": "suburb",
      "town": "town",
      "state": "state",
      "postcode": "postcode",
      "country": "country",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool