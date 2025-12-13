// Отфильтруйте массив строк, оставив только палиндромы
// (слова, которые читаются одинаково слева направо и справа налево)

const words = ['level', 'world', 'madam', 'hello', 'radar', 'javascript', 'noon'];

function getPalindromes(arr) {
    return arr.filter(word => {
        const reversed = word.split('').reverse().join('');
        return word === reversed;
    });

}

console.log(getPalindromes(words));
