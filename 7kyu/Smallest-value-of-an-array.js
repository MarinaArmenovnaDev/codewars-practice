//❓Напишите функцию, которая может возвращать либо наименьшее значение массива, либо
// индекс этого значения. Второй параметр функции укажет, следует ли возвращать значение или индекс.
//
// Предположим, что первый параметр всегда будет массивом, содержащим как минимум одно число без дубликатов. Предположим, что второй параметр будет строкой, содержащей одно из двух значений: 'value'и 'index'.
//
// Несколько примеров:
//
// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

//✅ SOLUTION:
function min(arr, toReturn) {
   let min = arr[0]
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
            minIndex = i
        }
    }
    if(toReturn === "value") return min
    if(toReturn === "index") return minIndex
}

console.log(min([8,12,234,1,2,3,4,5], "index"))
