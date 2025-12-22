//❓Вы создаёте игру "Выход из комнаты". Первый шаг — создать хеш-таблицу ( dictв Python) rooms, которая будет содержать все комнаты игры. В ней должно быть как минимум 3 комнаты, каждая из которых представляет собой хеш-таблицу как минимум с 3 свойствами (например name, description, , completed).

// ✅ SOLUTION:
var rooms = {
    room1: {
        name: "John",
        description: "lorem",
        completed: false,
    },room2: {
        name: "Bob",
        description: "lorem",
        completed: true,
    },room3: {
        name: "Liza",
        description: "lorem",
        completed: true,
    }
}
