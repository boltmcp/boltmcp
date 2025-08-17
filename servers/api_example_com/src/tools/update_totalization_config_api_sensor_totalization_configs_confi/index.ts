import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_totalization_config_api_sensor_totalization_configs_confi",
  "toolDescription": "Atualizar configuração de totalização",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/configs/{config_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "config_id": "config_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "trigger_type": "trigger_type",
      "operation": "operation",
      "time_interval": "time_interval",
      "time_interval_value": "time_interval_value",
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
      "window_timezone": "window_timezone",
      "allow_overlap": "allow_overlap",
      "gap_tolerance_minutes": "gap_tolerance_minutes",
      "running_condition": "running_condition",
      "running_threshold": "running_threshold",
      "state_values": "state_values",
      "idle_timeout_minutes": "idle_timeout_minutes",
      "equipment_power_kw": "equipment_power_kw",
      "energy_price_kwh": "energy_price_kwh",
      "energy_tariff_config": "energy_tariff_config",
      "trigger_tag_id": "trigger_tag_id",
      "trigger_condition": "trigger_condition",
      "trigger_value": "trigger_value",
      "reset_on_trigger": "reset_on_trigger",
      "min_samples": "min_samples",
      "quality_filter": "quality_filter",
      "store_intermediate_values": "store_intermediate_values",
      "precision_digits": "precision_digits",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool