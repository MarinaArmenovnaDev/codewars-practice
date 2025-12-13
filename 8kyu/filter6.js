// Отфильтруйте массив, оставив только уникальные элементы
const arr = [1, 2, 3, 2, 4, 1, 5, 3, 6];

function getUnique(arr) {
    return arr.filter((item, index, array) =>
        array.indexOf(item) === index
    );
}

console.log(getUnique(arr));
