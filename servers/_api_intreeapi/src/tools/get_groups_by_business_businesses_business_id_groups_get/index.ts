import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_groups_by_business_businesses_business_id_groups_get",
  "toolDescription": "Get Groups By Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/groups",
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
      "business_id": "business_id"
    },
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "id": "id",
      "price_period_start": "price_period_start",
      "price_period_end": "price_period_end",
      "category_id": "category_id",
      "search": "search",
      "include_draft": "include_draft",
      "embed_treet_count": "embed_treet_count",
      "embed_treet_owner_avatars": "embed_treet_owner_avatars",
      "embed_member_count": "embed_member_count",
      "embed_active_payment_count": "embed_active_payment_count",
      "embed_revenue": "embed_revenue",
      "embed_featured_treets": "embed_featured_treets"
    }
  },
  inputParamsSchema
}

export default tool