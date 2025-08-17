import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_window_examples_api_sensor_totalization_windows_examples_get",
  "toolDescription": "Get window configuration examples",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/windows/examples",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool