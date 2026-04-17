//❓Задание All Star Code Challenge #22
//
// Создайте функцию, которая принимает целочисленный аргумент в виде секунд и преобразует это значение в строку, описывающую, сколько часов и минут составляют эти секунды.
//
// Оставшиеся секунды игнорируются.
//
// Примечание:
// строковый вывод должен иметь определённый формат — "X часов и X минут".
//
// Например:
//
// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

// ✅ SOLUTION:
function toTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hour(s) and ${minutes} minute(s)`

}

console.log(toTime(3600))
