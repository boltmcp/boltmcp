import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_windowing_config_api_data_windowing_configs_post",
  "toolDescription": "Criar configuração de janelamento",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-windowing/configs/",
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
      "active": "active",
      "hidden": "hidden",
      "name": "name",
      "description": "description",
      "company_id": "company_id",
      "trigger_type": "trigger_type",
      "trigger_sensor_id": "trigger_sensor_id",
      "trigger_condition": "trigger_condition",
      "trigger_value": "trigger_value",
      "trigger_value_secondary": "trigger_value_secondary",
      "time_interval_minutes": "time_interval_minutes",
      "time_schedule": "time_schedule",
      "window_duration_minutes": "window_duration_minutes",
      "pre_trigger_minutes": "pre_trigger_minutes",
      "post_trigger_minutes": "post_trigger_minutes",
      "monitored_sensors": "monitored_sensors",
      "min_data_quality": "min_data_quality",
      "max_gap_minutes": "max_gap_minutes",
      "store_baseline": "store_baseline",
      "baseline_conditions": "baseline_conditions",
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool