import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { config } from "dotenv"

import * as schema from "./schema"

config({ path: ".env" })

const client = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
})

export const db = drizzle(client, { schema })