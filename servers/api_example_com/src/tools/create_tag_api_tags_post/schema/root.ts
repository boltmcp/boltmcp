import { z } from "zod"

export const inputParamsSchema = {
  "symbolic_name": z.string(),
  "technical_name": z.string(),
  "description": z.string(),
  "data_source": z.string(),
  "machine_id": z.union([z.string().uuid(), z.null()]).optional(),
  "manufacturer": z.union([z.string(), z.null()]).optional(),
  "model": z.union([z.string(), z.null()]).optional(),
  "unit_engineering": z.union([z.string(), z.null()]).optional(),
  "data_source_id": z.union([z.string().uuid(), z.null()]).optional(),
  "digital_mapping": z.union([z.record(z.string()), z.null()]).optional(),
  "is_digital": z.boolean().optional(),
  "alert_upper_limit": z.union([z.number(), z.null()]).optional(),
  "alert_lower_limit": z.union([z.number(), z.null()]).optional(),
  "alert_enabled": z.boolean().optional(),
  "alarm_upper_limit": z.union([z.number(), z.null()]).optional(),
  "alarm_lower_limit": z.union([z.number(), z.null()]).optional(),
  "alarm_enabled": z.boolean().optional(),
  "emergency_upper_limit": z.union([z.number(), z.null()]).optional(),
  "emergency_lower_limit": z.union([z.number(), z.null()]).optional(),
  "emergency_enabled": z.boolean().optional(),
  "alarm_deadband": z.number().optional(),
  "alarm_delay_seconds": z.number().int().optional(),
  "mqtt_topic": z.union([z.string(), z.null()]).optional(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional()
}