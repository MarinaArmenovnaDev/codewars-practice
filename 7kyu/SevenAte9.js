//❓Напишите функцию, которая удаляет все одиночные символы 9между 7символами.

// ✅ SOLUTION:
function sevenAte9(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (i > 0 && i < str.length - 1 &&
            str[i] === "9" &&
            str[i - 1] === "7" &&
            str[i + 1] === "7") {
            continue;
        } else {
            res += str[i];
        }
    }
    return res;

}

console.log(sevenAte9("7999712312"))
