import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treets_by_pack_packs_pack_id_treets_get",
  "toolDescription": "Get Treets By Pack",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.1/packs/{pack_id}/treets",
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
    "path": {
      "pack_id": "pack_id"
    },
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
      "redeem_limit_hit": "redeem_limit_hit",
      "is_upcoming": "is_upcoming",
      "category_id": "category_id"
    }
  },
  inputParamsSchema
}

export default tool