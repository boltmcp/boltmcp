import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The Task's ID"),
  "b_id": z.number().int().describe("The Task's ID"),
  "description": z.string().nullable().describe("Description of the Task").optional(),
  "notes": z.string().nullable().describe("Additional Notes for the Task - Employability Only").optional(),
  "status": z.string().nullable().describe("The Task's Status").optional(),
  "subStatus": z.string().nullable().describe("The Task's Sub Status").optional(),
  "workflow": z.string().nullable().describe("The Task's Workflow Code").optional(),
  "dueOn": z.string().datetime({ offset: true }).nullable().describe("The date the Task is due on").optional(),
  "doneOn": z.string().datetime({ offset: true }).nullable().describe("The date the Task was completed on").optional(),
  "start": z.string().datetime({ offset: true }).nullable().describe("The date the Task was started on").optional(),
  "participants": z.array(z.object({ "eventID": z.number().int().describe("Event ID").optional(), "id": z.string().nullable().describe("The Participant's ID").optional(), "type": z.string().nullable().describe("The Type of Participant").optional(), "roles": z.array(z.string()).nullable().describe("The Roles assigned to the Participant for the Appointment").optional() }).strict()).nullable().describe("List of Task Participants").optional()
}