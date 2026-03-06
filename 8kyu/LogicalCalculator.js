//❓Имея массив логических значений и логический оператор, верните логический результат, последовательно применяя оператор к значениям в массиве.
//
// Примеры
// логические значения = [True, True, False], оператор ="AND"
// True AND True ->True
// True AND False->False
// возвращатьсяFalse
// логические значения = [True, True, False], оператор ="OR"
// True OR True ->True
// True OR False->True
// возвращатьсяTrue
// логические значения = [True, True, False], оператор ="XOR"
// True XOR True ->False
// False XOR False->False
// возвращатьсяFalse
// Вход
// массив логических значений(1 <= array_length <= 50)
// Строка, указывающая логический оператор: "AND", "OR","XOR"

// ✅ SOLUTION:
function logicalCalc(array, op) {
    if (array.length < 1 || array.length > 50) return null
    let res = array[0]
    for (let i = 1; i < array.length; i++) {
        if (op === "AND") {
            res = res && array[i]
        }else if(op === "OR") {
            res = res || array[i]
        }else if(op === "XOR") {
            res = res !== array[i]
        }
    }
    return res
}

console.log(logicalCalc([true, true, true, false], "AND"))
