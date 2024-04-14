import { Router } from "express";
import { TemplateController } from "./template.controller";

export function useTemplateRouter() {
	const router = Router();

	router.get("/", TemplateController.index);
	router.post("/", TemplateController.create);

	return router;
}
