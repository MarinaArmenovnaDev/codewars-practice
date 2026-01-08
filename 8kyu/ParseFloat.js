//❓Напишите функцию parseF, которая принимает на вход число и возвращает null, если преобразование невозможно. Входные данные могут быть разных типов, поэтому имейте это в виду.


//✅ SOLUTION:
function parseF(s) {
   const num =  parseFloat(s)

    if(isNaN(num) || num === null || num === undefined) {
        return null
    }
    return num
}

console.log(parseF("1"))
