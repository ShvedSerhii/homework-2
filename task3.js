"use strict"

function makeChange(price, pay) {
  const stackBanknotes = [100, 50, 20, 10, 5, 2, 1]

  if (pay < price) throw new Error("Not enough money to buy!")

  let change = pay - price
  let index = []
  let result = []

  stackBanknotes.forEach(item => {
    let changeAmount = Math.floor(change / item)
    change -= item * changeAmount
    index.push(changeAmount)
  })

  for (let i = 0; i < index.length; ++i) {
    if (index[i] == 0) continue
    for (let j = index[i]; j > 0; --j) {
      result.push(stackBanknotes[i])
    }
  }

  return result
}
