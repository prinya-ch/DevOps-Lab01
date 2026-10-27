const assert = require("node:assert/strict");
const { calculateTotal, getResult } = require("./score");

assert.equal(calculateTotal(20, 30), 50);
assert.equal(calculateTotal(0, 40), 40);
assert.equal(calculateTotal(25, 25), 50);

assert.equal(getResult(50), "ผ่าน");
assert.equal(getResult(49), "ไม่ผ่าน");
assert.equal(getResult(80), "ผ่าน");

console.log("ผ่านการทดสอบทั้งหมด");
