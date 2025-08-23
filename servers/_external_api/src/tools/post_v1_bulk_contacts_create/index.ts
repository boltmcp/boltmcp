import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_bulk_contacts_create",
  "toolDescription": "Import contacts",
  "baseUrl": "/external-api",
  "path": "/v1/bulk-contacts-create",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "action": "action",
      "listIds": "listIds",
      "shouldNumberLookup": "shouldNumberLookup",
      "delimiter": "delimiter"
    }
  },
  inputParamsSchema
}

export default tool