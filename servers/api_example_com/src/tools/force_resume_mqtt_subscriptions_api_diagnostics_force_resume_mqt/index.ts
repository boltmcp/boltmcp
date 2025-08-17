import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "force_resume_mqtt_subscriptions_api_diagnostics_force_resume_mqt",
  "toolDescription": "Force Resume Mqtt Subscriptions",
  "baseUrl": "https://api.example.com",
  "path": "/api/diagnostics/force-resume-mqtt-subscriptions",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool