const assert = require("node:assert/strict");
const { calculateTotal } = require("./score");

assert.equal(calculateTotal(20, 30), 50);
assert.equal(calculateTotal(0, 40), 40);
assert.equal(calculateTotal(25, 25), 50);

console.log("ผ่านการทดสอบทั้งหมด");
