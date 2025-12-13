// Отфильтруйте массив пользователей, оставив только совершеннолетних (18 лет и старше)

const users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 17},
    {name: 'Charlie', age: 18},
    {name: 'David', age: 15},
    {name: 'Eve', age: 30}
];

function getAdults(usersArray) {
   return usersArray.filter((user) => user.age >=18)
}

console.log(getAdults(users));
