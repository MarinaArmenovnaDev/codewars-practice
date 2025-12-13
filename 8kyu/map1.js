// Напишите функцию, которая принимает массив чисел и возвращает
// новый массив, где каждое число умножено на 2

const numbers = [1, 2, 3, 4, 5];

function doubleNumbers(arr) {
    return arr.map((el)=> el*2)
}

console.log(doubleNumbers(numbers));
