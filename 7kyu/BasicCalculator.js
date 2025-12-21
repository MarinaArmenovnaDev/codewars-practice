//❓Напишите функцию с именем calculate, которая принимает 3 значения. Первое и третье значения — числа. Второе значение — символ. Если символ — "+", "-", "*" или "/", функция вернет результат соответствующей математической функции над двумя числами. Если строка не является одним из указанных символов, функция должна вернуть null ( ArgumentExceptionв C# это должно вызвать исключение).

// Имейте в виду, что деление на ноль невозможно. Если будет предпринята попытка деления на ноль, верните null ( ArgumentExceptionв C# это вызовет исключение)/(None в Python).

// ✅SOLUTION:
function calculate(num1, operation, num2) {
   if(operation === "+") return num1 + num2;
   if(operation === "-") return num1 - num2;
   if(operation === "*") return num1 * num2;
   if(operation === "/" && num1 !== 0 && num2 !== 0) return num1 / num2;
   else return null
}

console.log(calculate(5, "+", 4));
