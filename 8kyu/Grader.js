//❓Создайте функцию, которая принимает число в качестве аргумента и возвращает оценку, основанную на этом числе.
//
// Счет	Оценка
// Любое значение больше 1 или меньше 0,6	"Ф"
// 0,9 или более	"А"
// 0,8 или более	"Б"
// 0,7 или более	"С"
// 0,6 или более  	"Д"

// ✅ SOLUTION


function grader(score) {
    if (score > 1 || score < 0.6) return "F"
    if(score>=0.9) return "A"
    if(score>=0.8) return "B"
    if(score>=0.7) return "C"
    if(score>=0.6) return "D"

}

console.log(grader(5))
