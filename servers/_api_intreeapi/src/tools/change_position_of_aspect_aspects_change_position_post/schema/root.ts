import { z } from "zod"

export const inputParamsSchema = {
  "item_to_move_id": z.string().uuid().describe("Id of the item that is being moved."),
  "previous_item_id": z.union([z.string().uuid(), z.null()]).describe("Id of the item, which is going to be the previous item after the moved item is moved. If null, then the moved item is moved to the front.")
}