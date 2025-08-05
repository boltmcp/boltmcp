import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "servers_register_clientid_",
  "toolDescription": "",
  "baseUrl": "https://oba-auth.revolut.com",
  "path": "/register/{ClientId}",
  "method": "servers",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool