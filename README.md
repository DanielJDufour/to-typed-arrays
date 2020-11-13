# to-typed-arrays
Convert an ArrayBuffer or Buffer to All Valid Typed Arrays

# why
You may want to write a function that accepts input in many different typed array formats.
This package makes it easy to generate all the different forms for testing.

# install
```bash
npm install to-typed-arrays
```

# usage
```js
const result = toTypedArrays({ arrayBuffer });
/*
result is
{
  Int8Array: Int8Array(256) [
     0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, ...
  ],
  Uint8Array: Uint8Array(256) [
     0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, ...
  ],
  Uint8ClampedArray: Uint8ClampedArray(256) [
     0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, ...
  ],
  Int16Array: Int16Array(128) [
       256,    770,   1284,   1798,   2312,   2826,   3340,   3854,
      4368,   4882,   5396,   5910,   6424,   6938,   7452,   ...
  ],
  Uint16Array: Uint16Array(128) [
      256,   770,  1284,  1798,  2312,  2826,  3340,  3854,
     4368,  4882,  5396,  5910,  6424,  6938,  7452,  ...
  ],
  Int32Array: Int32Array(64) [
       50462976,   117835012,   185207048,   252579084,
      319951120,   387323156,   454695192,   ...
  ],
  Uint32Array: Uint32Array(64) [
      50462976,  117835012,  185207048,  252579084,
     319951120,  387323156,  454695192,  ...
  ],
  Float32Array: Float32Array(64) [
    3.820471434542632e-37, 1.0082513512365273e-34,
    2.658462758989161e-32, ...
  ],
  Float64Array: Float64Array(32) [
    7.949928895127363e-275, 3.6919162048650923e-236,
    1.846323925681849e-197, ...
  ],
  BigInt64Array: BigInt64Array(32) [
      506097522914230528n,  1084818905618843912n,
     1663540288323457296n,  ...,
  ],
  BigUint64Array: BigUint64Array(32) [
      506097522914230528n,  1084818905618843912n,
     1663540288323457296n,  ...
  ]
}
*/
```
