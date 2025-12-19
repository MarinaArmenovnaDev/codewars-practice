//❓Необходимо реализовать функцию, которая возвращает разницу между наибольшим и наименьшим значением в заданном массиве list / array( lst), полученном в качестве параметра.
//
// lstсодержит целые числа, то есть может содержать и отрицательные числа.
// Если lst поле пустое или содержит один элемент, вернуть0
// lstне отсортировано
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Веселиться!

//✅ SOLUTION:
function maxDiff(list) {
    if(list.length === 0 || list.length === 1) return 0;
    const sortList =  list.sort((a,b) => a - b);
    return sortList.at(-1) - sortList[0]
}

console.log(maxDiff([1, 2, 3, -4]  ));
