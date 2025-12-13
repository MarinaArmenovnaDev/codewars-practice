// Отфильтруйте массив задач, оставив только завершенные

const tasks = [
    {id: 1, title: 'Learn JS', completed: true},
    {id: 2, title: 'Make project', completed: false},
    {id: 3, title: 'Read docs', completed: true},
    {id: 4, title: 'Fix bugs', completed: false},
    {id: 5, title: 'Write tests', completed: true}
];

function getCompletedTasks(tasksList) {
return tasksList.filter((task) => task.completed);
}

console.log(getCompletedTasks(tasks));
