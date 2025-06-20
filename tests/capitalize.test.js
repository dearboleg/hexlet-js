import capitalize from "..//src/capitalize.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("Test failed: capitalize('hello') should return 'Hello'");
}

if (capitalize("") !== "") {
  throw new Error("Test failed: capitalize('') should return ''");
}

console.log("All tests passed!");
