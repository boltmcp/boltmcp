import { z } from "zod"

export const inputParamsSchema = {
  "destination": z.string(),
  "events": z.array(z.object({ "type": z.string(), "mode": z.string().optional(), "timestamp": z.number(), "source": z.object({ "type": z.string(), "userId": z.string() }), "webhookEventId": z.string(), "deliveryContext": z.object({ "isRedelivery": z.boolean() }), "message": z.object({ "id": z.string(), "type": z.enum(["text","image"]), "quoteToken": z.string().optional(), "text": z.string().optional(), "contentProvider": z.object({ "type": z.string(), "originalContentUrl": z.string().optional(), "previewImageUrl": z.string().optional() }).optional() }).optional(), "replyToken": z.string() })),
  "x-line-signature": z.string()
}