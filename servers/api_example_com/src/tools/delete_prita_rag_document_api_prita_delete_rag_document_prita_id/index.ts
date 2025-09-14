import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_prita_rag_document_api_prita_delete_rag_document_prita_id",
  "toolDescription": "Delete Prita Rag Document",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/delete-rag-document/{prita_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool