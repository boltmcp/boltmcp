import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.string().uuid(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional(),
  "marked_for_deletion": z.union([z.boolean(), z.null()]).optional(),
  "name": z.union([z.string().max(200), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "trigger_type": z.union([z.enum(["sensor_condition","time_based","manual"]).describe("Tipos de trigger para janelamento"), z.null()]).optional(),
  "trigger_sensor_id": z.union([z.string().uuid(), z.null()]).optional(),
  "trigger_condition": z.union([z.enum(["equals","not_equals","greater_than","greater_equal","less_than","less_equal","between","changed"]).describe("Condições de comparação"), z.null()]).optional(),
  "trigger_value": z.union([z.number(), z.string(), z.null()]).optional(),
  "trigger_value_secondary": z.union([z.number(), z.string(), z.null()]).optional(),
  "time_interval_minutes": z.union([z.number().int(), z.null()]).optional(),
  "time_schedule": z.union([z.record(z.any()), z.null()]).optional(),
  "window_duration_minutes": z.union([z.number().int(), z.null()]).optional(),
  "pre_trigger_minutes": z.union([z.number().int(), z.null()]).optional(),
  "post_trigger_minutes": z.union([z.number().int(), z.null()]).optional(),
  "monitored_sensors": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "min_data_quality": z.union([z.number(), z.string(), z.null()]).optional(),
  "max_gap_minutes": z.union([z.number().int(), z.null()]).optional(),
  "store_baseline": z.union([z.boolean(), z.null()]).optional(),
  "baseline_conditions": z.union([z.record(z.any()), z.null()]).optional(),
  "enabled": z.union([z.boolean(), z.null()]).optional()
}