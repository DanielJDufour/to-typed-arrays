const test = require("ava");
const toTypedArrays = require("./to-typed-arrays");

const nums = [];
for (let i = 0; i < 256; i++) {
  nums.push(i);
}
const array = Uint8Array.from(nums);
const arrayBuffer = array.buffer;

test("simple conversion", t => {
  const debug = false;
  const result = toTypedArrays({ arrayBuffer, debug });
  t.is(Object.keys(result).length, 11);
});

test("more complicated conversion with an arrayBuffer of a byteLength of 63", t => {
  const debug = true;
  const result = toTypedArrays({
    arrayBuffer: arrayBuffer.slice(0, 63),
    debug
  });
  t.is(Object.keys(result).length, 3);
});
