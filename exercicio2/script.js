const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = prompt('Digite um número:')

for (i in arr) {
  console.log(`${num}x${arr[i]} = ${num * arr[i]}`)
}
