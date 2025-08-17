import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "module_key": z.string().max(50).describe("Chave do módulo"),
  "enabled": z.boolean().describe("Módulo habilitado").optional(),
  "settings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settings` to the tool, first call the tool `expandSchema` with \"/properties/settings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configurações específicas</property-description>").optional(),
  "license_expires_at": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data de expiração da licença").optional(),
  "max_users": z.union([z.number().int(), z.null()]).describe("Máximo de usuários").optional(),
  "max_records": z.union([z.number().int(), z.null()]).describe("Máximo de registros").optional()
}