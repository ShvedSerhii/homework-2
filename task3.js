"use strict";

const stackBanknotes = [1, 2, 5, 10, 20, 50, 100];

function makeChange(price, pay) {
  let change = pay - price;

  if (stackBanknotes.includes(change)) return 1;

  let max = Number.MAX_VALUE;
  let memo = Array(change + 1).fill(max);

  stackBanknotes.forEach(item => {
    if (change > item) memo[item] = 1;
  });

  for (let i = 2; i <= change; ++i) {
    if (stackBanknotes.includes(i)) {
      continue;
    }
    let min1 = i > 1 ? memo[i - 1] : max;
    let min2 = i > 2 ? memo[i - 2] : max;
    let min5 = i > 5 ? memo[i - 5] : max;
    let min10 = i > 10 ? memo[i - 10] : max;
    let min20 = i > 20 ? memo[i - 20] : max;
    let min50 = i > 50 ? memo[i - 50] : max;
    let min100 = i > 100 ? memo[i - 100] : max;

    memo[i] = Math.min(min1, min2, min5, min10, min20, min50, min100) + 1;
  }

  return memo[change];
} 