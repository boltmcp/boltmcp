import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "edit_template_bot_api_manajemen_bot_edit_template_bot_bot_id_put",
  "toolDescription": "Edit Template Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-bot/edit-template-bot/{bot_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bot_id": "bot_id"
    },
    "body": {
      "bot_name": "bot_name",
      "bot_role": "bot_role",
      "bot_description": "bot_description",
      "image_src": "image_src",
      "activation_fee": "activation_fee",
      "monthly_fee": "monthly_fee",
      "tersedia": "tersedia",
      "bot_type": "bot_type",
      "plan": "plan",
      "alur_kerja_1": "alur_kerja_1",
      "deskripsi_alur_kerja_1": "deskripsi_alur_kerja_1",
      "alur_kerja_2": "alur_kerja_2",
      "deskripsi_alur_kerja_2": "deskripsi_alur_kerja_2",
      "alur_kerja_3": "alur_kerja_3",
      "deskripsi_alur_kerja_3": "deskripsi_alur_kerja_3",
      "alur_kerja_4": "alur_kerja_4",
      "deskripsi_alur_kerja_4": "deskripsi_alur_kerja_4",
      "alur_kerja_5": "alur_kerja_5",
      "deskripsi_alur_kerja_5": "deskripsi_alur_kerja_5"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool