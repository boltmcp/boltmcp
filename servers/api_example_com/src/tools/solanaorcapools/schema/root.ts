import { z } from "zod"

export const inputParamsSchema = {
  "dex": z.literal("orca").describe("The Decentralized Exchange (DEX) name. Must be 'orca' for this endpoint.")
}