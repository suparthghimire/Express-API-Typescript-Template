import express from "express";
import { useMiddleware } from "./middleware";
import { useRoutes } from "./routes";

export function SetupServer() {
	const expressApp = express();
	useMiddleware(expressApp);
	useRoutes(expressApp);
	return expressApp;
}
