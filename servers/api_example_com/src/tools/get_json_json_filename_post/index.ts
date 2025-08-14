import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_json_json_filename_post",
  "toolDescription": "Get Json",
  "baseUrl": "https://api.example.com",
  "path": "/json/{filename}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool