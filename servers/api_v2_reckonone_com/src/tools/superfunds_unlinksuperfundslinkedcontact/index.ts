import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_unlinksuperfundslinkedcontact",
  "toolDescription": "Unlinks a specified super fund's linked contact from that super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/contacts/{contactId}/unlink",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId",
      "contactId": "contactId"
    }
  },
  inputParamsSchema
}

export default tool