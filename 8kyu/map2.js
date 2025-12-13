// Преобразуйте массив объектов пользователей, добавив к каждому имени префикс "Mr./Ms."

const users = [
    {id: 1, name: 'John', gender: 'male'},
    {id: 2, name: 'Alice', gender: 'female'},
    {id: 3, name: 'Bob', gender: 'male'},
    {id: 4, name: 'Emma', gender: 'female'}
];

function formatNames(usersArray) {
   return usersArray.map((el) =>
       el.gender==="male"
       ? {...el, name: `Mr.${el.name}`}
       : {...el, name: `Ms.${el.name}`}
   );
}

console.log(formatNames(users));
