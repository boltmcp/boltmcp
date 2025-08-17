import { z } from "zod"

export const inputParamsSchema = {
  "work_order_id": z.string().uuid(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "comment": z.string().describe("Texto do comentário"),
  "is_internal": z.boolean().describe("Comentário interno").optional(),
  "attachments": z.array(z.record(z.any())).describe("Anexos do comentário").optional(),
  "b_work_order_id": z.string().uuid().describe("ID da ordem de serviço"),
  "user_id": z.string().uuid().describe("ID do usuário")
}