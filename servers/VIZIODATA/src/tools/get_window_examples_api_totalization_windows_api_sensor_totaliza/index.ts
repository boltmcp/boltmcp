import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_window_examples_api_totalization_windows_api_sensor_totaliza",
  "toolDescription": "Get Window Examples",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/totalization-windows/api/sensor-totalization/windows/examples",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool