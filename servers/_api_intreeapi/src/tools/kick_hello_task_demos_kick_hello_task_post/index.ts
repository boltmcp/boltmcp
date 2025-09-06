import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kick_hello_task_demos_kick_hello_task_post",
  "toolDescription": "Kick Hello Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/kick-hello-task",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool