//❓Ваша задача в этом задании — реализовать функцию, которая вычисляет сумму целых чисел внутри строки. Например, в строке "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"сумма целых чисел равна 3635.
//
// Примечание: будут проверяться только положительные целые числа.

// ✅ SOLUTION:
function sumOfIntegersInString(s) {
    const matches = s.match(/\d+/g);

    if (!matches) return 0;
    return matches.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy"))
