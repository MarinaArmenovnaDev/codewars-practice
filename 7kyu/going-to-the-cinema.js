//❓Мой друг Джон любит ходить в кино. Он может выбирать между системой А и системой Б.
//
// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
// Пример:
// Если Джон сходит в кино 3 раза:
//
// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
// Джон хочет узнать, сколько раз ему нужно сходить в кино, чтобы конечный результат применения Системы Б, округленный до ближайшего доллара, оказался дешевле, чем при использовании Системы А.
//
// Функция movieимеет 3 параметра: card(цена карты), ticket(обычная цена билета), perc(доля от стоимости предыдущего билета) и возвращает первый из них nтаким образом, чтобы
//
// ceil(price of System B) < price of System A.
// Ещё примеры:
// movie(500, 15, 0.9) should return 43
//     (with card the total price is 634, with tickets 645)
// movie(100, 10, 0.95) should return 24
//     (with card the total price is 235, with tickets 240)

//✅ SOLUTION:
function movie(card, ticket, perc) {
    let totalA = 0
    let totalB = card
    let currentTicketPrice = ticket * perc
    let n = 0
    while (true) {
        n++;
        totalA = ticket * n;
        totalB += currentTicketPrice;

        if (Math.ceil(totalB) < totalA) {
            return n;
        }

        currentTicketPrice *= perc;
    }
}


console.log(movie(500, 15, 0.9))
