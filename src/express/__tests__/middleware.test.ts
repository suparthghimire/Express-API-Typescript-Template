import type { Application } from "express";
import { describe, expect, it, vi } from "vitest";
import { useMiddleware } from "../middleware";

vi.mock("cors", () => ({
	default: vi.fn(() => "cors"),
}));
vi.mock("morgan", () => ({
	default: vi.fn(() => "morgan"),
}));

describe("useMiddleware", () => {
	it("should use cors and morgan", () => {
		const app = { use: vi.fn() } as unknown as Application;

		useMiddleware(app);

		expect(app.use).toHaveBeenCalledTimes(2);
		expect(app.use).toHaveBeenCalledWith("cors");
		expect(app.use).toHaveBeenCalledWith("morgan");
	});
});
