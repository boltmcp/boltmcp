import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_ws_events_demos_demo_ws_events_get",
  "toolDescription": "Demo Ws Events",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/demo/ws-events",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "user_id": "user_id",
      "event_type": "event_type"
    }
  },
  inputParamsSchema
}

export default tool