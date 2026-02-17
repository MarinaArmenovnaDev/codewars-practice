//❓Напишите функцию, которая принимает массив элементов любого типа и возвращает первый элемент массива.

// ✅ SOLUTION:
const getFirstElement =<T>( array: T[]): T => {
    return array[0];
}

// Пример 1: Массив чисел
const numbers = [1, 2, 3, 4, 5]
console.log(getFirstElement(numbers)) // 1

// Пример 2: Массив строк
const words = ['hello', 'world', 'typescript']
console.log(getFirstElement(words)) // 'hello'
