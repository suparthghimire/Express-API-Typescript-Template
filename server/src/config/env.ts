const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
export const env = {
  port,
  isDev,
  isProd,
};
