import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "electronicaddresstypes_patchelectronicaddresstype",
  "toolDescription": "Updates selected fields of an existing electronic address type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/electronicaddresstypes/{electronicAddressTypeId}",
  "method": "patch",
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