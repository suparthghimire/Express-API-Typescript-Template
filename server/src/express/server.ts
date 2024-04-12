import express from "express";
import dotenv from "dotenv";
import { useMiddleware } from "./middleware";
import { useRoutes } from "./routes";

export function SetupServer() {
  dotenv.config();

  const expressApp = express();
  useMiddleware(expressApp);
  useRoutes(expressApp);

  return expressApp;
}
