import { strict as assert } from "node:assert";
import capitalize from "..//src/capitalize.js";

// if (capitalize("hello") !== "Hello") {
//   throw new Error("Test failed: capitalize('hello') should return 'Hello'");
// }

// if (capitalize("") !== "") {
//   throw new Error("Test failed: capitalize('') should return ''");
// }
assert.equal(capitalize(""), "");

assert.equal(capitalize("hello"), "Hello");
console.log("All tests passed!");
