import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "name": z.string().max(200).describe("Nome da configuração"),
  "description": z.union([z.string(), z.null()]).describe("Descrição da configuração").optional(),
  "company_id": z.string().uuid().describe("ID da empresa"),
  "trigger_type": z.string().optional(),
  "trigger_sensor_id": z.union([z.string().uuid(), z.null()]).describe("ID do sensor que dispara").optional(),
  "trigger_condition": z.union([z.enum(["equals","not_equals","greater_than","greater_equal","less_than","less_equal","between","changed"]).describe("Condições de comparação"), z.null()]).describe("Condição do trigger").optional(),
  "trigger_value": z.union([z.number(), z.string(), z.null()]).describe("Valor de comparação").optional(),
  "trigger_value_secondary": z.union([z.number(), z.string(), z.null()]).describe("Valor secundário (para BETWEEN)").optional(),
  "time_interval_minutes": z.union([z.number().int(), z.null()]).describe("Intervalo em minutos").optional(),
  "time_schedule": z.union([z.record(z.any()), z.null()]).describe("Agendamento de tempo").optional(),
  "window_duration_minutes": z.number().int().describe("Duração da janela em minutos").optional(),
  "pre_trigger_minutes": z.number().int().describe("Minutos antes do trigger").optional(),
  "post_trigger_minutes": z.number().int().describe("Minutos após o trigger").optional(),
  "monitored_sensors": z.array(z.string().uuid()).describe("IDs dos sensores monitorados").optional(),
  "min_data_quality": z.union([z.number(), z.string()]).describe("% mínima de qualidade dos dados").optional(),
  "max_gap_minutes": z.number().int().describe("Máximo gap entre dados em minutos").optional(),
  "store_baseline": z.boolean().describe("Armazenar como baseline").optional(),
  "baseline_conditions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `baseline_conditions` to the tool, first call the tool `expandSchema` with \"/properties/baseline_conditions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Condições para baseline</property-description>").optional(),
  "enabled": z.boolean().describe("Configuração habilitada").optional()
}