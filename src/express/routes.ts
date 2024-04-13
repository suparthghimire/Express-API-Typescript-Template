import { useTemplateRouter } from "@/modules/template/template.routes";
import type { Application } from "express";

export function useRoutes(app: Application) {
	const templateRouter = useTemplateRouter();
	app.use("/template", templateRouter);
}
