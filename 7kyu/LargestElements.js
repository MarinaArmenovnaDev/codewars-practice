//❓Напишите программу, которая выводит верхние nэлементы из списка.
//
// Пример:
//
// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
// ==> [6, 7]

// ✅ SOLUTION:
function largest(n, array) {
    if (n <= 0) return [];

    const sorted = array.sort((a, b) => a - b);

    if (n >= array.length) return sorted;

    return sorted.slice(-n);
}

console.log(largest(4, [49745, 11473, -7938, -12608]));
