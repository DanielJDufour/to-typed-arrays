module.exports = function toTypedArrays({ arrayBuffer, debug }) {
  if (debug) console.log("[to-typed-arrays] starting with ", arrayBuffer);
  const result = {};
  [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
  ].forEach(TypedArray => {
    try {
      result[TypedArray.name] = new TypedArray(arrayBuffer);
    } catch (error) {
      if (debug)
        console.log(
          `[to-typed-arrays] couldn't convert ArrayBuffer to ${TypedArray.name} because "${error.message}"`
        );
    }
  });
  if (debug) console.log(`[to-typed-arrays] returning`, result);
  return result;
};
