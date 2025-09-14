import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_rag_status_in_pinecone_api_prita_check_rag_status_prita_id",
  "toolDescription": "Check Rag Status In Pinecone",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/check-rag-status/{prita_id}",
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