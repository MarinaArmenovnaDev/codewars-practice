//❓Даны два слова и буква. Необходимо вернуть одно слово, представляющее собой комбинацию обоих слов, объединенных в точке первого появления данной буквы в каждом слове. Возвращаемое слово должно содержать начало первого слова и конец второго, а разделяющая буква должна находиться посередине. Можно предположить, что оба слова будут содержать разделяющую букву.

// ✅ SOLUTION:
function stringMerge(string1, string2, letter) {
    const index1 = string1.indexOf(letter);
    const index2 = string2.indexOf(letter);
    return string1.slice(0, index1) + string2.slice(index2);
}

console.log(stringMerge("hello", "world", "l"))
