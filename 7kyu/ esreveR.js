//❓Напишите функцию reverse, которая переворачивает список (или, в случае Clojure, любую структуру данных, похожую на список).
//
// (Встроенные функции деактивированы)

// ✅ SOLUTION:
reverse = function (array) {
    const res = []
    for (let i = array.length - 1; i >= 0; i--) {
        res.push(array[i]);
    }
    return res
}

console.log(reverse([1, null, 14, "two"]))
