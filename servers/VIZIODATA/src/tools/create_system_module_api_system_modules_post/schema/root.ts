import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "module_key": z.string().max(50).describe("Chave única do módulo"),
  "name": z.string().max(100).describe("Nome do módulo"),
  "description": z.union([z.string(), z.null()]).describe("Descrição do módulo").optional(),
  "category": z.union([z.string().max(50), z.null()]).describe("Categoria do módulo").optional(),
  "version": z.string().max(20).describe("Versão do módulo").optional(),
  "is_available": z.boolean().describe("Módulo disponível no sistema").optional(),
  "requires_license": z.boolean().describe("Requer licença").optional(),
  "depends_on_modules": z.array(z.string()).describe("Módulos dependentes").optional(),
  "icon": z.union([z.string().max(50), z.null()]).describe("Ícone do módulo").optional(),
  "color": z.union([z.string().max(7), z.null()]).describe("Cor do módulo (hex)").optional(),
  "sort_order": z.number().int().describe("Ordem de exibição").optional()
}