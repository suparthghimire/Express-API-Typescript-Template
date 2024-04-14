import { useRoutes } from "@/express/routes";
import type { Application } from "express";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/modules/template/template.routes", () => ({
	useTemplateRouter: vi.fn(() => "mockedTemplateRouter"),
}));

describe("useRoutes", () => {
	it("should use the template router at the correct path", () => {
		const app = {
			use: vi.fn(),
		} as unknown as Application;

		useRoutes(app);

		// Assertions to check if app.use has been called correctly
		expect(app.use).toHaveBeenCalledTimes(1); // Ensures app.use was called exactly once
		expect(app.use).toHaveBeenCalledWith("/template", "mockedTemplateRouter");
	});
});
