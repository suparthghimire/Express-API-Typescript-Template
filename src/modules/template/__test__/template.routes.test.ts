import { describe, it, expect, vi } from "vitest";
import { useTemplateRouter } from "../template.routes";
import { TemplateController } from "../template.controller";

vi.mock("express", () => {
  const mockRouter = {
    get: vi.fn(),
    post: vi.fn(),
    use: vi.fn(),
  };
  return { Router: () => mockRouter };
});

describe("TemplateRouter", () => {
  it("should correctly setup GET and POST routes", () => {
    const router = useTemplateRouter();

    expect(router.get).toHaveBeenCalledWith("/", TemplateController.index);
    expect(router.post).toHaveBeenCalledWith("/", TemplateController.create);
  });
});
