import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "electronicaddresstypes_updateelectronicaddresstype",
  "toolDescription": "Updates an existing electronic address type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/electronicaddresstypes/{electronicAddressTypeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "electronicAddressTypeId": "electronicAddressTypeId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool