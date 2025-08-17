import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aggregated_metrics_api_processor_instances_metrics_aggregate",
  "toolDescription": "Get Aggregated Metrics",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/processor-instances/metrics/aggregated",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool