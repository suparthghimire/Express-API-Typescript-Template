import type { Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";
import { TemplateController } from "../template.controller";

vi.mock("./template.service", () => ({
	TemplateService: {
		getHelloWorld: vi.fn().mockReturnValue({ message: "Hello World" }),
	},
}));

describe("TemplateController", () => {
	// you can make the callback function async if there are async operations
	it("index should return 200 with correct message", () => {
		const req = {} as Request;
		const res = {
			status: vi.fn().mockReturnThis(),
			json: vi.fn(),
		} as unknown as Response;

		TemplateController.index(req, res);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({ message: "Hello World" });
	});

	it("create should return 201 with correct message", () => {
		const req = {} as Request;
		const res = {
			status: vi.fn().mockReturnThis(),
			json: vi.fn(),
		} as unknown as Response;

		TemplateController.create(req, res);

		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({ message: "Hello World" });
	});
});
