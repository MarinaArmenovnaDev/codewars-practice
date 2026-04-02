//❓Напишите функцию
//
// vowel2index(str)
// Эта функция принимает на вход строку и заменяет все гласные [a, e, i, o, u] на их соответствующие позиции в этой строке.
// Например:
//
// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Ваша функция должна быть нечувствительна к регистру гласных звуков.

// ✅ SOLUTION:
function vowel2index(str) {
    return str.split("").map((el, i) =>
        "aeiou".includes(el.toLowerCase()) ? i + 1 : el
    ).join("");
}

console.log(vowel2index('this is my string'))
