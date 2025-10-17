import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid enviroment variables",
    z.treeifyError(parsedEnv.error)
  );

  throw new Error("Invalid enviroment variables.");
}

export const env = parsedEnv.data;
