import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchsettingsaddress",
  "toolDescription": "Updates selected fields of an address in a book's settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/addresses/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "type": "type"
    },
    "body": {
      "line1": "line1",
      "line2": "line2",
      "line3": "line3",
      "town": "town",
      "suburb": "suburb",
      "state": "state",
      "postcode": "postcode",
      "country": "country"
    }
  },
  inputParamsSchema
}

export default tool