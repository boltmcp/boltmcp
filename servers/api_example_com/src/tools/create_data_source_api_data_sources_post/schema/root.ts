import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "type": z.enum(["mqtt","rest","database","opc","modbus","websocket","file"]).describe("Tipos de fonte de dados suportados"),
  "description": z.union([z.string(), z.null()]).optional(),
  "company_id": z.string().uuid(),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "collection_interval": z.union([z.number().int().gte(1).lte(86400), z.null()]).describe("Intervalo de coleta de dados em segundos").optional()
}