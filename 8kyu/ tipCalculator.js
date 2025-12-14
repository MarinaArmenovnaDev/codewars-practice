//❓Дополните функцию, которая рассчитывает размер чаевых в зависимости от общей суммы счета и качества обслуживания.
//
// Вам необходимо учесть следующие оценки:
//
// Ужасно: чаевые 0%
// Плохой уровень дохода: чаевые 5%
// Хорошо: чаевые 10%
// Отлично: чаевые 15%
// Отлично: чаевые 20%
// Рейтинг нечувствителен к регистру (например, "great" = "GREAT"). Если получен нераспознанный рейтинг, необходимо вернуть:
//
// "Rating not recognised"на JavaScript, Python и Ruby...
// ...или nullна языке ява
// ...или -1на C#
// Поскольку вы хороший человек, вы всегда округляете чаевые в большую сторону, независимо от качества обслуживания.

//✅ SOLUTION:

function calculateTip(amount, rating) {
    const r = rating.toLowerCase()
    let tip
    switch (r) {
        case "terrible":
            tip = 0
            break
        case "poor":
            tip = 5
            break
        case "good":
            tip = 10
            break
        case "great":
            tip = 15
            break
        case "excellent":
            tip = 20
            break
        default:
            return "Rating not recognised"

    }

    const res = amount * tip / 100
    return Math.ceil(res)
}

console.log(calculateTip(100, "Good"))
