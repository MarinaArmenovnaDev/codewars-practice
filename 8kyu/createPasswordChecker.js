//❓const isLongEnough = createPasswordChecker(8);
// console.log(isLongEnough('hello'));   // false (5 < 8)
// console.log(isLongEnough('password')); // true (8 == 8)
// console.log(isLongEnough('supersecret')); // true (11 > 8)
//
// const isShortEnough = createPasswordChecker(4);
// console.log(isShortEnough('abc'));

// ✅ SOLUTION:
function createPasswordChecker(minLength) {
    // minLength "запоминается" в замыкании возвращаемой функции
    return function(password) {
        return password.length >= minLength;
    };
}
// Замыкание здесь хранит параметр minLength, который нужен для будущих проверок.
const isLongEnough = createPasswordChecker(8);
console.log(isLongEnough('hello'));
console.log(isLongEnough('password'));
console.log(isLongEnough('supersecret'));


const isShortEnough = createPasswordChecker(4);
console.log(isShortEnough('abc'));
