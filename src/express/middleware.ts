import cors from "cors";
import type { Application } from "express";
import morgan from "morgan";

export function useMiddleware(app: Application) {
	app.use(cors());
	app.use(morgan("dev"));
}
