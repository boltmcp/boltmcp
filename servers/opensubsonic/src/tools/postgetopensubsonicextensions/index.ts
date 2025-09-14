import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postgetopensubsonicextensions",
  "toolDescription": "List the OpenSubsonic extensions supported by this server.",
  "baseUrl": "{url}",
  "path": "/rest/getOpenSubsonicExtensions",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool