import dotenv from "dotenv";
import { describe, expect, it, vi } from "vitest";
import { useMiddleware } from "../middleware";
import { useRoutes } from "../routes";
import { SetupServer } from "../server";

// Mock external modules and internal functions
vi.mock("dotenv", () => ({
	default: {
		config: vi.fn(),
	},
}));
vi.mock("express", () => {
	const use = vi.fn();
	const mockRouterInstance = {
		get: vi.fn(),
		post: vi.fn(),
		put: vi.fn(),
		delete: vi.fn(),
		patch: vi.fn(),
		use: vi.fn(),
	};
	const mockRouter = () => mockRouterInstance;

	return {
		default: () => ({ use }),
		Router: mockRouter,
	};
});
vi.mock("../middleware", () => ({
	useMiddleware: vi.fn(),
}));
vi.mock("../routes", () => ({
	useRoutes: vi.fn(),
}));

describe("SetupServer", () => {
	it("should initialize the server with middleware and routes", () => {
		SetupServer();

		// Checks if useMiddleware and useRoutes were called with the express app
		expect(useMiddleware).toHaveBeenCalledOnce();
		expect(useRoutes).toHaveBeenCalledOnce();
	});
});
