import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_bot_details_api_prita_urutan_get",
  "toolDescription": "Get Bot Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/{urutan}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "urutan": "urutan"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool