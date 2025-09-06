import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_hub_hub_treets_get",
  "toolDescription": "Get Treet Hub",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/hub/treets",
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
      "embed_packs": "embed_packs",
      "embed_schedule_data": "embed_schedule_data",
      "embed_locations": "embed_locations",
      "embed_categories": "embed_categories",
      "embed_time_frame_data": "embed_time_frame_data",
      "id": "id",
      "hub_id": "hub_id",
      "owner_id": "owner_id",
      "partner_id": "partner_id",
      "pack_id": "pack_id",
      "inverse_pack_filter": "inverse_pack_filter",
      "category_id": "category_id",
      "is_expired": "is_expired",
      "state": "state",
      "access_state": "access_state",
      "search": "search",
      "medium_threshold_expires_at": "medium_threshold_expires_at",
      "critical_threshold_expires_at": "critical_threshold_expires_at",
      "medium_threshold_redeems_left": "medium_threshold_redeems_left",
      "critical_threshold_redeems_left": "critical_threshold_redeems_left",
      "hub_member_treet_role": "hub_member_treet_role",
      "redeem_limit_hit": "redeem_limit_hit",
      "highlight_featured_treets": "highlight_featured_treets"
    }
  },
  inputParamsSchema
}

export default tool