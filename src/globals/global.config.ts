import { env } from "@/config/env";
import { EnvironmentEnum } from "./global.enum";

export const isDev = env.NODE_ENV === EnvironmentEnum.Development;
export const isProd = env.NODE_ENV === EnvironmentEnum.Production;
