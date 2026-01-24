//❓Ваша задача — реализовать простой интерпретатор для печально известного эзотерического языка HQ9+ , который будет работать с вводом одного символа:
//
// Если на входе 'H', вернуть'Hello World!'
// Если на входе указано 'Q', верните входные данные.
// Если на вход поступает '9', верните полный текст песни "99 Bottles of Beer" . Он должен быть отформатирован следующим образом:
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Во всех остальных случаях ничего не возвращайте ( nullв C#, NoneRust и ""Haskell используется return).
// ( +Не оказывает видимого воздействия, поэтому мы можем смело игнорировать это.)

// ✅ SOLUTION:
function HQ9(code) {
    if (code === 'H') return 'Hello World!';
    if (code === 'Q') return code;
    if (code === '9') {
        let song = '';
        for (let i = 99; i > 0; i--) {
            if (i > 2) {
                song += `${i} bottles of beer on the wall, ${i} bottles of beer.\n` +
                    `Take one down and pass it around, ${i-1} bottles of beer on the wall.\n`;
            } else if (i === 2) {
                song += `2 bottles of beer on the wall, 2 bottles of beer.\n` +
                    `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
            } else if (i === 1) {
                song += `1 bottle of beer on the wall, 1 bottle of beer.\n` +
                    `Take one down and pass it around, no more bottles of beer on the wall.\n` +
                    `No more bottles of beer on the wall, no more bottles of beer.\n` +
                    `Go to the store and buy some more, 99 bottles of beer on the wall.`;
            }
        }
        return song;
    }
    return undefined;
}
