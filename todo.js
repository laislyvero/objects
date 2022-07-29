const todos = ["order water", "clean compound", "buy food"];


todos.forEach(function (todo, index)  {
    todos[2] = "order water";
    const num = index + 1;
    console.log(`${num} -- ${todo} `);
});

let index = todos.findIndex(function(todo) {
    return todo == "clean compound";
});
console.log(index);