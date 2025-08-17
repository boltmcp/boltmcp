import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "title": z.string().max(200).describe("Título da ordem de serviço"),
  "description": z.union([z.string(), z.null()]).describe("Descrição detalhada").optional(),
  "type": z.string().optional(),
  "priority": z.string().optional(),
  "company_id": z.string().uuid().describe("ID da empresa"),
  "site_id": z.union([z.string().uuid(), z.null()]).describe("ID do site").optional(),
  "area_id": z.union([z.string().uuid(), z.null()]).describe("ID da área").optional(),
  "machine_id": z.union([z.string().uuid(), z.null()]).describe("ID da máquina").optional(),
  "assigned_to": z.union([z.string().uuid(), z.null()]).describe("Usuário responsável").optional(),
  "assigned_team": z.array(z.string().uuid()).describe("Equipe responsável").optional(),
  "estimated_hours": z.union([z.number(), z.string(), z.null()]).describe("Horas estimadas").optional(),
  "estimated_cost": z.union([z.number(), z.string(), z.null()]).describe("Custo estimado").optional(),
  "scheduled_start": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Início programado").optional(),
  "scheduled_end": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Fim programado").optional(),
  "requires_approval": z.boolean().describe("Requer aprovação").optional(),
  "kanban_position": z.number().int().describe("Posição no quadro Kanban").optional(),
  "kanban_column": z.union([z.string().max(50), z.null()]).describe("Coluna customizada").optional(),
  "tags": z.array(z.string()).describe("Tags da ordem").optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Campos customizados</property-description>").optional(),
  "created_by": z.string().uuid().describe("Usuário que criou a ordem")
}