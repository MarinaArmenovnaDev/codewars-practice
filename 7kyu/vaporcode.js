//❓Задание 4 первой недели ASC (средний уровень #1)
//
// Напишите функцию, которая преобразует любое предложение в предложение типа VAPORWAVE. Предложение типа VAPORWAVE преобразует все буквы в верхний регистр и добавляет 2 пробела между каждой буквой (или специальным символом), чтобы создать этот эффект VAPORWAVE.
//
// Обратите внимание, что в данном случае пробелы следует игнорировать.
//
// Примеры
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

// ✅ SOLUTION:
function vaporcode(string) {
return string.toUpperCase().replace(/\s+/g, '').split("").join("  ")
}

console.log(vaporcode( "Lets go to the movies"  ))
