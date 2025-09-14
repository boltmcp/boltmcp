import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getopensubsonicextensions",
  "toolDescription": "List the OpenSubsonic extensions supported by this server.",
  "baseUrl": "{url}",
  "path": "/rest/getOpenSubsonicExtensions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool