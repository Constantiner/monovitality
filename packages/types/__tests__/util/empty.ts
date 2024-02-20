import { isEmptyType } from "../../src/util/empty";

describe("EmptyType Domain", () => {
	describe("isEmptyType behavior", () => {
		it("should return true for an empty object", () => {
			const emptyObject = {};
			expect(isEmptyType(emptyObject)).toBe(true);
		});

		it("should return false for a non-empty object", () => {
			const nonEmptyObject = { key: "value" };
			expect(isEmptyType(nonEmptyObject)).toBe(false);
		});

		it("should return false for a null value", () => {
			const nullValue = null;
			expect(isEmptyType(nullValue)).toBe(false);
		});

		it("should return false for an undefined value", () => {
			const undefinedValue = undefined;
			expect(isEmptyType(undefinedValue)).toBe(false);
		});

		it("should return false for a non-object value", () => {
			const nonObjectValue = "I am a string";
			expect(isEmptyType(nonObjectValue)).toBe(false);
		});
	});
});
