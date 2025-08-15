import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_linkexistingcontacttosuperfund",
  "toolDescription": "Links an existing contact to a specified super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/contacts/{contactId}/link",
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