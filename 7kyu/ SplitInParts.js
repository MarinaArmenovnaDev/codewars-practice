//❓Цель этой задачи — разбить заданную строку на несколько строк одинакового размера (обратите внимание, что размер строк передается в метод).
//
// Пример:
//
// Split the below string into other strings of size #3
//
// 'supercalifragilisticexpialidocious'
//
// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Предположения:
//
// String length is always greater than 0
// String has no spaces
// Size is always positive

// ✅ SOLUTION:
var splitInParts = function(s, partLength){
    let result = [];
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.substring(i, i + partLength));
    }
    return result.join(' ');
}


console.log(splitInParts('supercalifragilisticexpialidocious', 3));
