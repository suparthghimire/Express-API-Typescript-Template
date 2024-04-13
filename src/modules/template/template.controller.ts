import type { Request, Response } from "express";
import { TemplateService } from "./template.service";
export const TemplateController = {
	index: (req: Request, res: Response) => {
		const message = TemplateService.getHelloWorld();
		return res.status(200).json(message);
	},
	create: (req: Request, res: Response) => {
		const message = TemplateService.getHelloWorld();
		return res.status(201).json(message);
	},
};
