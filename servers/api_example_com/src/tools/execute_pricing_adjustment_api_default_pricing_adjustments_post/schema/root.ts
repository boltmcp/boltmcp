import { z } from "zod"

export const inputParamsSchema = {
  "adjustment_name": z.string().min(1).max(100),
  "description": z.union([z.string(), z.null()]).optional(),
  "adjustment_type": z.enum(["percentage","fixed_value","template_based"]).describe("Tipos de reajuste"),
  "percentage_data": z.union([z.object({ "input_percentage": z.union([z.number(), z.null()]).optional(), "output_percentage": z.union([z.number(), z.null()]).optional(), "storage_percentage": z.union([z.number(), z.null()]).optional(), "requests_percentage": z.union([z.number(), z.null()]).optional(), "global_percentage": z.union([z.number(), z.null()]).optional() }).describe("Dados para reajuste percentual"), z.null()]).optional(),
  "fixed_value_data": z.union([z.object({ "price_per_gb_input": z.union([z.number().gte(0), z.null()]).optional(), "price_per_gb_output": z.union([z.number().gte(0), z.null()]).optional(), "price_per_gb_storage": z.union([z.number().gte(0), z.null()]).optional(), "price_per_1k_requests": z.union([z.number().gte(0), z.null()]).optional() }).describe("Dados para reajuste com valores fixos"), z.null()]).optional(),
  "template_data": z.union([z.object({ "template_id": z.string().uuid(), "override_monthly_limit": z.union([z.boolean(), z.null()]).describe("Se deve sobrescrever limites mensais") }).describe("Dados para reajuste baseado em template"), z.null()]).optional(),
  "target_companies": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `target_companies` to the tool, first call the tool `expandSchema` with \"/properties/target_companies\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Critérios para seleção de empresas</property-description>"),
  "preview_only": z.boolean().describe("Se é apenas preview (não executa)").optional()
}