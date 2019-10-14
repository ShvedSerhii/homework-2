"use strict";

function mySumMinMaxFunction(arr) {
  let result = {};
  arr = arr.filter(item => !isNaN(+item));
  result.sum = arr.reduce((sum, current) => sum + current, 0);
  arr.sort((a, b) => a - b);
  result.min = arr[0];
  result.max = arr.pop();
  return result;
}
