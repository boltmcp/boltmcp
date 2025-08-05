import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "servers_distinguished_name",
  "toolDescription": "",
  "baseUrl": "https://oba-auth.revolut.com",
  "path": "/distinguished-name",
  "method": "servers",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool