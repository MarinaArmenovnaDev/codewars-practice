// Преобразуйте массив температур из Цельсия в Фаренгейт
// Формула: F = C * 9/5 + 32

const celsiusTemps = [0, 20, 37, 100, -10];

function convertToFahrenheit(tempsArray) {
return tempsArray.map((el) => el *9/5 + 32)
}

console.log(convertToFahrenheit(celsiusTemps));
