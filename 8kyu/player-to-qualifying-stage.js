//❓Представим, что у нас есть популярная онлайн-ролевая игра. Игрок начинает с нулевым показателем в классе E5. A1 — это наивысший уровень, которого может достичь игрок.
//
// Допустим, игрок хочет подняться до класса E4. Для этого ему необходимо набрать не менее 100 очков, чтобы пройти в квалификационный этап.
//
// Напишите скрипт, который будет проверять, набрал ли игрок не менее 100 баллов в своем классе. Если да, то он переходит в квалификационный этап.
//
// В этом случае мы возвращаемся "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
//
// В противном случае вернуть значение False/false(в соответствии с используемым языком).

// ✅ SOLUTION:
function playerRankUp (points) {
return points>=100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false
}

console.log(playerRankUp(99))
