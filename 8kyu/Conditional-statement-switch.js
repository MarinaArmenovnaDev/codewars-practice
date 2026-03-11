//❓В JavaScript switchможно заменить несколько ifоператоров.
//
// switch(n){
//   case 1:
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;
//
//   default:       //default is optional, sometimes it can be omitted
//     //code block
//                  //The last one does not need break
// }
// switch— это ключевое слово, а — nэто переменная для переключения. case 1означает, когда n===1. После " :" вы можете добавить свой код для того, что делать в этом случае. Ключевое слово breakиспользуется для завершения — если вы забудете break, код продолжит выполняться через другие caseоператоры и defaultдо тех пор, пока не breakпоявится . Если ни один caseоператор не соответствует , defaultвводится .
//
// В некоторых случаях switchутверждение яснее, чем if..elseсамо утверждение.
//
// Например, мы можем написать функцию для вычисления сегодняшнего дня, вот так:
//
// function whatDayIsToday(n){
//   // getDay() is a method of Date() - we will learn this later
//   var day=new Date().getDay(),x;
//   switch (day){
//     case 0:
//       x="Today it's Sunday";
//       break;
//     case 1:
//       x="Today it's Monday";
//       break;
//     case 2:
//       x="Today it's Tuesday";
//       break;
//     case 3:
//       x="Today it's Wednesday";
//       break;
//     case 4:
//       x="Today it's Thursday";
//       break;
//     case 5:
//       x="Today it's Friday";
//       break;
//     case 6:
//       x="Today it's Saturday";
//       break;
//   }
//   return x;
// }
// Задача
// Завершите функцию howManydays. Она принимает 1 параметр month, обозначающий месяц года. Разные месяцы имеют разное количество дней, как показано в таблице ниже. Верните количество дней в этом месяце month. Проверка входных данных не требуется: значение месяца всегда будет больше 0 и меньше или равно 12.
//
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Совет: Использование этого defaultметода в большинстве случаев позволит сократить объем работы.
//
// После завершения нажмите «Тест», чтобы проверить свой код на соответствие начальным тестам, и «Попытка», чтобы проверить свой код на соответствие всем тестам. Если вы успешно пройдете все тесты, вы можете нажать «Отправить», чтобы отправить свой код.

//✅ SOLUTION:
function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30
            break;
        default:
            days = 31
    }
    return days;
}


console.log(howManydays(2));
