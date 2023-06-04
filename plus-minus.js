function plusMinus(arr) {
  let positive = arr.filter(num => num > 0).length / arr.length
  let negative = arr.filter(num => num < 0).length / arr.length
  let zero = arr.filter(num => num == 0).length / arr.length
  console.log(`${positive.toFixed(6)}\n${negative.toFixed(6)}\n${zero.toFixed(6)}`)
}