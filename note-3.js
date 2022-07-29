const  todos = [{
    text:"order food",
    body:"ring road shop",
},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
{
    text:"attend movie show",
    body:"swan park", 
},{
    text:"design website",
    body:"sunset systems",
}];
console.log(todos[1].body)

//todos.forEach(function(items){
   // console.log(todos.text);
//});
const findTodo = function (todos, todoText) {
   return todos.find(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
   });
};

console.log(findTodo (todos, "attend movie show"));


const findTodo1 = function (todos, todoText) {
    return todos.findIndex(function(todo) {
     return todo.text.toLowerCase() === todoText.toLowerCase();
    });
 };
 console.log(findTodo1 (todos, "attend movie show"));
