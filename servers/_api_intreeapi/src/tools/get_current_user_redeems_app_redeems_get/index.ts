import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_current_user_redeems_app_redeems_get",
  "toolDescription": "Get Current User Redeems",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.1/app/redeems",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "embed_hub": "embed_hub",
      "embed_treet_code": "embed_treet_code",
      "embed_cover_image": "embed_cover_image",
      "embed_schedule_data": "embed_schedule_data",
      "embed_cooldown_data": "embed_cooldown_data",
      "embed_time_frame_data": "embed_time_frame_data",
      "embed_locations": "embed_locations",
      "embed_booking_data": "embed_booking_data",
      "id": "id",
      "treet_id": "treet_id",
      "hub_id": "hub_id",
      "category_id": "category_id",
      "search": "search",
      "pack_id": "pack_id"
    }
  },
  inputParamsSchema
}

export default tool