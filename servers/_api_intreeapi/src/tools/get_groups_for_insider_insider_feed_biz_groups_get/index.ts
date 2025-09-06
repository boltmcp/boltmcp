import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_groups_for_insider_insider_feed_biz_groups_get",
  "toolDescription": "Get Groups For Insider",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/insider/feed/biz-groups",
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
      "id": "id",
      "treet_id": "treet_id",
      "treet_access_role": "treet_access_role",
      "inverse_treet_filter": "inverse_treet_filter",
      "include_draft": "include_draft",
      "treet_amount": "treet_amount",
      "treet_amount_comparator": "treet_amount_comparator",
      "hub_id": "hub_id",
      "category_id": "category_id",
      "title": "title",
      "total_treets_get_expired": "total_treets_get_expired",
      "total_treets_get_archived": "total_treets_get_archived",
      "medium_threshold_expires_at": "medium_threshold_expires_at",
      "critical_threshold_expires_at": "critical_threshold_expires_at",
      "medium_threshold_redeems_left": "medium_threshold_redeems_left",
      "critical_threshold_redeems_left": "critical_threshold_redeems_left",
      "treet_share_access": "treet_share_access",
      "embed_total_treets": "embed_total_treets",
      "embed_total_members": "embed_total_members",
      "embed_featured_treets": "embed_featured_treets",
      "embed_hub": "embed_hub"
    }
  },
  inputParamsSchema
}

export default tool