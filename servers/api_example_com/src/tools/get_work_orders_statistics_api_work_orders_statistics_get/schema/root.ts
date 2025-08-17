import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string().uuid(), z.null()]).describe("ID da empresa (obrigatório se usuário não for superuser)").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data inicial").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data final").optional()
}