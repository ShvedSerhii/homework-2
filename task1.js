"use strict";

function mySumMinMaxFunction(array) {
  let result = {};
  array = array.filter(item => !isNaN(+item));
  result.sum = array.reduce((sum, current) => sum + current, 0);
  array.sort((a, b) => a - b);
  result.min = array[0];
  result.max = array.pop();
  return result;
}
