//❓ Напишите функцию, которая принимает массив чисел и возвращает
//  новый массив только с положительными числами (больше 0)

//✅ SOLUTION:

const numbers = [5, -2, 10, 0, -8, 3, -1, 7];

function getPositiveNumbers(arr) {
   return arr.filter((x) => x > 0);
}

console.log(getPositiveNumbers(numbers));
