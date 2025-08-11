import { env } from "@/lib/env";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

export const db = drizzle(
  createClient({
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_CONNECTION_URL,
  }),
  { schema },
);

export * from "./schema";
