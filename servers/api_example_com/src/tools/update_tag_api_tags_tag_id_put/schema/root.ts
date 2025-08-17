import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "symbolic_name": z.union([z.string(), z.null()]).optional(),
  "technical_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "data_source": z.union([z.string(), z.null()]).optional(),
  "machine_id": z.union([z.string().uuid(), z.null()]).optional(),
  "manufacturer": z.union([z.string(), z.null()]).optional(),
  "model": z.union([z.string(), z.null()]).optional(),
  "unit_engineering": z.union([z.string(), z.null()]).optional(),
  "data_source_id": z.union([z.string().uuid(), z.null()]).optional(),
  "digital_mapping": z.union([z.record(z.string()), z.null()]).optional(),
  "is_digital": z.union([z.boolean(), z.null()]).optional(),
  "alert_upper_limit": z.union([z.number(), z.null()]).optional(),
  "alert_lower_limit": z.union([z.number(), z.null()]).optional(),
  "alert_enabled": z.union([z.boolean(), z.null()]).optional(),
  "alarm_upper_limit": z.union([z.number(), z.null()]).optional(),
  "alarm_lower_limit": z.union([z.number(), z.null()]).optional(),
  "alarm_enabled": z.union([z.boolean(), z.null()]).optional(),
  "emergency_upper_limit": z.union([z.number(), z.null()]).optional(),
  "emergency_lower_limit": z.union([z.number(), z.null()]).optional(),
  "emergency_enabled": z.union([z.boolean(), z.null()]).optional(),
  "alarm_deadband": z.union([z.number(), z.null()]).optional(),
  "alarm_delay_seconds": z.union([z.number().int(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional()
}