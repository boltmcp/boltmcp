import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_prita_rag_document_gdrive_api_prita_upload_rag_document_p",
  "toolDescription": "Upload Prita Rag Document Gdrive",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/upload-rag-document/{prita_id}",
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