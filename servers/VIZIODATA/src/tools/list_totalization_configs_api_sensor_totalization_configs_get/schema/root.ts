import { z } from "zod"

export const inputParamsSchema = {
  "active_only": z.boolean().describe("Mostrar apenas configurações ativas").optional(),
  "trigger_type": z.union([z.enum(["time_based","sensor_based"]).describe("Tipos de trigger para totalização"), z.null()]).describe("Filtrar por tipo de trigger").optional(),
  "operation": z.union([z.enum(["sum","count","average","min","max","integral","time_running","time_stopped","time_in_state","state_changes","uptime_percentage","energy_consumption","energy_cost"]).describe("Operações de totalização disponíveis"), z.null()]).describe("Filtrar por operação").optional(),
  "source_tag_id": z.union([z.string(), z.null()]).describe("Filtrar por sensor origem").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limite de registros").optional(),
  "offset": z.number().int().gte(0).describe("Offset para paginação").optional()
}