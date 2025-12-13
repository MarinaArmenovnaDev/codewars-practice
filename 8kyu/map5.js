// Вычислите квадратные корни всех чисел в массиве
// Округлите результат до 2 знаков после запятой

const numbers = [4, 9, 16, 25, 36];

function getSquareRoots(arr) {
   return arr.map((el)=> Math.sqrt(el).toFixed(2))
}

console.log(getSquareRoots(numbers));
