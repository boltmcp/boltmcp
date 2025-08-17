import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_create_totalization_api_sensor_totalization_test_create_pos",
  "toolDescription": "[TESTE] Criar totalizador para testar criação de sensor",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-totalization/test-create",
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