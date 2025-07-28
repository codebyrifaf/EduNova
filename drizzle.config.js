import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_fbkjtO08cWva@ep-quiet-block-aeic1q84-pooler.c-2.us-east-2.aws.neon.tech/edunova?sslmode=require&channel_binding=require',
  }
});
