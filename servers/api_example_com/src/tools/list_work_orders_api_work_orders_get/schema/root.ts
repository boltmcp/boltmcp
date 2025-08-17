import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Número da página").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Itens por página").optional(),
  "company_id": z.union([z.string().uuid(), z.null()]).describe("Filtrar por empresa").optional(),
  "status": z.union([z.enum(["backlog","todo","in_progress","review","testing","done","cancelled"]).describe("Status das ordens de serviço (Kanban)"), z.null()]).describe("Filtrar por status").optional(),
  "priority": z.union([z.enum(["low","medium","high","critical"]).describe("Prioridades das ordens de serviço"), z.null()]).describe("Filtrar por prioridade").optional(),
  "assigned_to": z.union([z.string().uuid(), z.null()]).describe("Filtrar por responsável").optional(),
  "search": z.union([z.string(), z.null()]).describe("Buscar por título ou número").optional()
}