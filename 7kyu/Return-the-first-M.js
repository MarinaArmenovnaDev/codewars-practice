//❓Реализуйте функцию, которая принимает два числа mи nи возвращает массив первых mкратных действительного числа n. Предположим, что m— положительное целое число.
//
// Бывший.
//
// (3, 5.0) --> [5.0, 10.0, 15.0]

// ✅ SOLUTION:
function multiples(m, n){
    let res = []
    for (let i = 1; i <= m; i++) {
        let arr =  n * i
        res.push(arr)
    }
return res
}

console.log(multiples(3,5))
