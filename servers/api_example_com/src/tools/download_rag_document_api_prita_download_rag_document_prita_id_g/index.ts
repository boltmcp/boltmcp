import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "download_rag_document_api_prita_download_rag_document_prita_id_g",
  "toolDescription": "Download Rag Document",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/download-rag-document/{prita_id}",
  "method": "get",
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