import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receive_push_mock_demos_receive_push_mock_post",
  "toolDescription": "Receive Push Mock",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/receive-push-mock",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool