"use strict";

function waterCalc(arr) {
  const n = arr.length;

  let directArr = new Array(n);
  let reverseArr = new Array(n);
  let water = 0;

  directArr[0] = arr[0];
  for (let i = 1; i < n; ++i) {
    directArr[i] = Math.max(directArr[i - 1], arr[i]);
  }

  reverseArr[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    reverseArr[i] = Math.max(reverseArr[i + 1], arr[i]);
  }

  arr.forEach((item, index) => {
    water += Math.min(directArr[index], reverseArr[index]) - item;
  });

  return water;
} 