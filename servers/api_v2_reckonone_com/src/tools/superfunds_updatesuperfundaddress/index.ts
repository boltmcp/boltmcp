import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_updatesuperfundaddress",
  "toolDescription": "Updates an existing super fund address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/addresses/{type}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId",
      "type": "type"
    },
    "body": {
      "line1": "line1",
      "line2": "line2",
      "line3": "line3",
      "suburb": "suburb",
      "town": "town",
      "state": "state",
      "postcode": "postcode",
      "country": "country"
    }
  },
  inputParamsSchema
}

export default tool