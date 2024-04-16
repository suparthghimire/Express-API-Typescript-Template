import dotenv from "dotenv";

import { EnvironmentEnum } from "@/globals/global.enum";
import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.nativeEnum(EnvironmentEnum),
	PORT: z.string().refine((value) => !Number.isNaN(Number(value)), {
		message: "PORT must be a number",
	}),
});

function createEnv() {
	dotenv.config();

	const processEnvs = process.env;
	const parseEnvs = envSchema.safeParse(processEnvs);
	if (!parseEnvs.success) {
		console.error("Invalid environment variables");
		console.error("Make sure the environment variables match the env schema");
		console.error(parseEnvs.error.errors);

		process.exit(1);
	}
	return parseEnvs.data;
}

const env = createEnv();

export { env };
