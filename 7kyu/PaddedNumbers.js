//❓Дополните решение так, чтобы оно возвращало отформатированную строку. Возвращаемое значение должно быть равно "Value is VALUE", где value — пятизначное число с добавлением знаков после запятой.

// ✅ SOLUTION:
function solution(value){
    const paddedValue = String(value).padStart(5, '0');
    return `Value is ${paddedValue}`;
}

console.log(solution("10"))
