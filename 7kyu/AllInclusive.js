//❓Вход:
//
// строкаstrng
// массив строк arr
// Результат работы функции contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
// логическое значение, trueесли все повороты strngвключены вarr
// falseв противном случае
// Примеры:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Примечание:
// Хотя это и не совсем корректно с математической точки зрения.
//
// мы будем считать, что вращений нет.strng == ""
// и для любого массива arr:contain_all_rots("", arr) --> true

//✅ SOLUTION:
function containAllRots(strng, arr) {
    if (strng === "") return true;

    let rotations = [];
    for (let i = 0; i < strng.length; i++) {
        // Поворот: берем часть от i до конца + часть от начала до i
        const rotation = strng.slice(i) + strng.slice(0, i);
        rotations.push(rotation);
    }
    return rotations.every(rotation => arr.includes(rotation));
}


console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
console.log(containAllRots( "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) )
