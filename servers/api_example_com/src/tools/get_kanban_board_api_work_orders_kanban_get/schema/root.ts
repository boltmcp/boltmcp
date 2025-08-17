import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string().uuid(), z.null()]).describe("ID da empresa (obrigatório se usuário não for superuser)").optional(),
  "site_id": z.union([z.string().uuid(), z.null()]).describe("Filtrar por site").optional(),
  "assigned_to": z.union([z.string().uuid(), z.null()]).describe("Filtrar por responsável").optional()
}