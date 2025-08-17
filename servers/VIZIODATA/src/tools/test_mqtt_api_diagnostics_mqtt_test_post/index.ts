import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_mqtt_api_diagnostics_mqtt_test_post",
  "toolDescription": "Test Mqtt",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/diagnostics/mqtt/test",
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
      "broker_host": "broker_host",
      "broker_port": "broker_port",
      "username": "username",
      "password": "password",
      "test_topic": "test_topic",
      "timeout_seconds": "timeout_seconds"
    }
  },
  inputParamsSchema
}

export default tool