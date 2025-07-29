import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login",
  "toolDescription": "Authenticate yourself",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/method/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "usr": "usr",
      "pwd": "pwd"
    },
    "body": {
      "usr": "b_usr",
      "pwd": "b_pwd"
    }
  },
  inputParamsSchema
}

export default tool