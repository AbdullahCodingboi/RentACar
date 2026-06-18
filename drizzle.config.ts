import path from "path"
import { defineConfig } from "drizzle-kit"
import { config } from "dotenv"

config({ path: path.resolve(process.cwd(), ".env") })

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
})