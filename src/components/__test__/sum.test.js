// const { sum } = require("../sum");
import {sum} from "../sum"
test("sum fn return sum" , () => {
    const result = sum(4,3);

    //Assertion
    expect(result).toBe(7);
});