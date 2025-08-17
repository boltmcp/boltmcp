import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_window_config_api_totalization_windows_api_sensor_total",
  "toolDescription": "Validate Window Config",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/totalization-windows/api/sensor-totalization/windows/validate",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "window_type": "window_type",
      "fixed_hour_start": "fixed_hour_start",
      "fixed_hour_end": "fixed_hour_end",
      "daily_start_time": "daily_start_time",
      "daily_end_time": "daily_end_time",
      "weekly_start_day": "weekly_start_day",
      "weekly_end_day": "weekly_end_day",
      "monthly_start_day": "monthly_start_day",
      "monthly_end_day": "monthly_end_day",
      "custom_shifts": "custom_shifts",
      "window_timezone": "window_timezone"
    }
  },
  inputParamsSchema
}

export default tool