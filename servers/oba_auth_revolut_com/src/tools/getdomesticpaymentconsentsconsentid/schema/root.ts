import { z } from "zod"

export const inputParamsSchema = {
  "ConsentId": z.string().describe("The ID of the account access consent."),
  "x-fapi-financial-id": z.string().describe("The unique ID of the [ASPSP](https://developer.revolut.com/docs/guides/build-banking-apps/glossary) that the request is issued to.\nThe ID of Revolut is `001580000103UAvAAM`."),
  "x-fapi-customer-last-logged-time": z.string().regex(new RegExp("^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{2}:\\d{2}:\\d{2} (GMT|UTC)$")).describe("The date and time when the [PSU](https://developer.revolut.com/docs/guides/build-banking-apps/glossary) last logged in with the [TPP](https://developer.revolut.com/docs/guides/build-banking-apps/glossary).\n\nAll dates in the HTTP headers are represented as [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) Full Dates.\nFor example: <nobr>`Sun, 10 Sep 2017 19:43:31 UTC`</nobr>.").optional(),
  "x-fapi-customer-ip-address": z.string().describe("The IP address of the [PSU](https://developer.revolut.com/docs/guides/build-banking-apps/glossary) if the PSU is logged in with the [TPP](https://developer.revolut.com/docs/guides/build-banking-apps/glossary).").optional(),
  "x-fapi-interaction-id": z.string().describe("An [RFC4122](https://datatracker.ietf.org/doc/html/rfc4122) UUID used as a correlation ID.").optional(),
  "Authorization": z.string().describe("The access token that you've generated.\nFor more information, see [Generate an access token](https://developer.revolut.com/docs/guides/build-banking-apps/get-started/get-access-token)."),
  "x-customer-user-agent": z.string().describe("The user agent that the [PSU](https://developer.revolut.com/docs/guides/build-banking-apps/glossary) is using.").optional()
}