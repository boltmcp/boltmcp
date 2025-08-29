import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "download_file_api_utils_download_get",
  "toolDescription": "Download File",
  "baseUrl": "https://api.example.com",
  "path": "/api/utils/download",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool