import { describe, expect, it } from "vitest";
import { TemplateService } from "../template.service";

describe("TemplateService", () => {
	it("getHelloWorld returns correct message object", () => {
		const expected = { message: "Hello World" };
		const result = TemplateService.getHelloWorld();
		expect(result).toEqual(expected);
	});
});
