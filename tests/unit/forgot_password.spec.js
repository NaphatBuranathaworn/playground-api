
import { forgotPassword, sum } from "../../controllers/forgotPasswordController";

describe("forgotPassword()", () => {
    it("should return true", () => {
        //Testing a boolean
        expect(forgotPassword()).toBeTruthy();
        //Another way to test a boolean
        expect(forgotPassword()).toEqual(true);
    });
});

describe('sum()', () => {
    it ('should return 3', () => {
        expect(sum(1, 2)).toBeTruthy();
    });
});