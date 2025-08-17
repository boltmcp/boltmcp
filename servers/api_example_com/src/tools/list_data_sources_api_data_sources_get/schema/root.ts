import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Items per page").optional(),
  "type": z.union([z.enum(["mqtt","rest","database","opc","modbus","websocket","file"]).describe("Tipos de fonte de dados suportados"), z.null()]).describe("Filter by type").optional(),
  "search": z.union([z.string(), z.null()]).describe("Search by name or description").optional(),
  "active_only": z.boolean().describe("Show only active data sources").optional(),
  "company_id": z.union([z.string(), z.null()]).describe("Filter by company UUID").optional()
}