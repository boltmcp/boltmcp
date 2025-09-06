import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_feed_old_app_treets_get",
  "toolDescription": "Get Treet Feed Old",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/app/treets",
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
      "embed_cover_image": "embed_cover_image",
      "embed_gallery": "embed_gallery",
      "embed_schedule_data": "embed_schedule_data",
      "embed_cooldown_data": "embed_cooldown_data",
      "embed_time_frame_data": "embed_time_frame_data",
      "embed_locations": "embed_locations",
      "embed_shared_by_ids": "embed_shared_by_ids",
      "embed_reservation_data": "embed_reservation_data",
      "id": "id",
      "hub_id": "hub_id",
      "pack_id": "pack_id",
      "is_shared": "is_shared",
      "is_shared_by_current_user": "is_shared_by_current_user",
      "share_limit_hit": "share_limit_hit",
      "can_user_share": "can_user_share",
      "is_hidden": "is_hidden",
      "is_saved": "is_saved",
      "search": "search",
      "redeem_limit_hit": "redeem_limit_hit",
      "is_upcoming": "is_upcoming",
      "category_id": "category_id"
    }
  },
  inputParamsSchema
}

export default tool