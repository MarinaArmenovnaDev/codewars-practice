// Отфильтруйте массив слов, оставив только те, длина которых больше 5 символов

const words = ['apple', 'banana', 'kiwi', 'strawberry', 'pear', 'blueberry', 'fig'];

function getLongWords(wordsArray, minLength = 5) {
 return wordsArray.filter(word => word.split('').length > minLength);
}

console.log(getLongWords(words));
