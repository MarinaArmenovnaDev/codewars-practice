//❓Польский алфавит состоит из 32 букв: 9 гласных и 23 согласных.
//
// Ваша задача — заменить буквы, на которых стоят диакритические знаки:

// ✅ SOLUTION:
function correctPolishLetters(string) {
    const polishMap = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
        'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };

    return string.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => polishMap[char]);
}

console.log(correctPolishLetters("Jędrzej Błądziński"))
