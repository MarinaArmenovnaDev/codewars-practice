//❓Дана строка, состоящая из цифр [0-9]; верните строку, в которой каждая цифра повторяется количество раз, равное её значению.
//
// Примеры
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//✅ SOLUTION:
function explode(s) {
    const arr =  s.split("");
    let res = ""
    for (let char of arr) {
        if (char) {
           res += char.repeat(char);
        }
    }
    return res
}

console.log(explode("312"))
