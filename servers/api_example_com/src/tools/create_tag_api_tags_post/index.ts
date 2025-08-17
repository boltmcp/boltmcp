import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_tag_api_tags_post",
  "toolDescription": "Create new tag",
  "baseUrl": "https://api.example.com",
  "path": "/api/tags/",
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
      "symbolic_name": "symbolic_name",
      "technical_name": "technical_name",
      "description": "description",
      "data_source": "data_source",
      "machine_id": "machine_id",
      "manufacturer": "manufacturer",
      "model": "model",
      "unit_engineering": "unit_engineering",
      "data_source_id": "data_source_id",
      "digital_mapping": "digital_mapping",
      "is_digital": "is_digital",
      "alert_upper_limit": "alert_upper_limit",
      "alert_lower_limit": "alert_lower_limit",
      "alert_enabled": "alert_enabled",
      "alarm_upper_limit": "alarm_upper_limit",
      "alarm_lower_limit": "alarm_lower_limit",
      "alarm_enabled": "alarm_enabled",
      "emergency_upper_limit": "emergency_upper_limit",
      "emergency_lower_limit": "emergency_lower_limit",
      "emergency_enabled": "emergency_enabled",
      "alarm_deadband": "alarm_deadband",
      "alarm_delay_seconds": "alarm_delay_seconds",
      "mqtt_topic": "mqtt_topic",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool