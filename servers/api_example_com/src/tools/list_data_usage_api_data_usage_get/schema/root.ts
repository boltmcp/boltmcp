import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string(), z.null()]).describe("Company ID filter").optional(),
  "user_id": z.union([z.string(), z.null()]).describe("User ID filter").optional(),
  "usage_type": z.union([z.enum(["input","output","storage"]).describe("Tipos de usage de dados"), z.null()]).describe("Usage type filter").optional(),
  "endpoint": z.union([z.enum(["sensor_data_create","sensor_data_list","sensor_data_aggregated","realtime_websocket","mqtt_publish","mqtt_subscribe","file_upload","file_download","api_call","dashboard_load","report_generation"]).describe("Endpoints/serviços que geram usage"), z.null()]).describe("Endpoint filter").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start date filter").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End date filter").optional(),
  "billing_period": z.union([z.string(), z.null()]).describe("Billing period (YYYY-MM)").optional(),
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(500).describe("Items per page").optional()
}