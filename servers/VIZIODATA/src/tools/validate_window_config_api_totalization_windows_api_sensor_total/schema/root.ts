import { z } from "zod"

export const inputParamsSchema = {
  "window_type": z.string(),
  "fixed_hour_start": z.union([z.number().int(), z.null()]).optional(),
  "fixed_hour_end": z.union([z.number().int(), z.null()]).optional(),
  "daily_start_time": z.union([z.string(), z.null()]).optional(),
  "daily_end_time": z.union([z.string(), z.null()]).optional(),
  "weekly_start_day": z.union([z.number().int(), z.null()]).optional(),
  "weekly_end_day": z.union([z.number().int(), z.null()]).optional(),
  "monthly_start_day": z.union([z.number().int(), z.null()]).optional(),
  "monthly_end_day": z.union([z.number().int(), z.null()]).optional(),
  "custom_shifts": z.union([z.array(z.object({ "name": z.string().describe("Nome do turno"), "start": z.string().regex(new RegExp("^([01]?[0-9]|2[0-3]):[0-5][0-9]$")).describe("Horário de início (HH:MM)"), "end": z.string().regex(new RegExp("^([01]?[0-9]|2[0-3]):[0-5][0-9]$")).describe("Horário de fim (HH:MM)") }).describe("Schema para turno customizado")), z.null()]).optional(),
  "window_timezone": z.string().optional()
}