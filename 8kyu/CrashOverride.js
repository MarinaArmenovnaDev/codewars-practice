//❓Каждому начинающему хакеру нужен псевдоним! The Phantom Phreak, Acid Burn, Zero Coolи Crash Override— вот несколько ярких примеров из фильма Hackers.
//
// Ваша задача — создать функцию, которая, получив правильное имя и фамилию, вернет соответствующий псевдоним.
//
// Примечания:
// Уже предоставлены два объекта, возвращающие имя из одного слова в ответ на первую букву имени, и один объект, возвращающий имя из первой буквы фамилии. Дополнительные сведения см. в примерах ниже.
//
// Если первый символ любого из имен, переданных функции, не является буквой из списка A - Z, следует вернуть значение."Your name must start with a letter from A - Z."
//
// Иногда люди могут забывать писать первую букву своего имени с заглавной буквы, поэтому ваша функция должна учитывать эти грамматические ошибки.
//
// Примеры
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
//
// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// ✅ SOLUTION:

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' }
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}
function aliasGen(first, last){
    const firstLetter = first[0].toUpperCase();
    const lastLetter = last[0].toUpperCase()

    if (!/[A-Z]/.test(firstLetter) || !/[A-Z]/.test(lastLetter)) {
        return "Your name must start with a letter from A - Z.";
    }
    return `${firstName[firstLetter]} ${surname[lastLetter]}`;
}


console.log(aliasGen('aarry', 'Brentwood'));
