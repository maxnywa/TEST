// Todo
//Add, Edit, Delete

let todos = [
    {
        text: 'Learn JS',
        id: 0
    },
    {
        text: 'Learn Angular',
        id: 1
    }
];

function addTask(text){
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty')

    // Create new task obj
    const  newTask = {
        id: todos.length,
        text
    };

    //Add new task
    todos.push(newTask);

    return todos;
}

function deleteTask(id){
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = +id;

    let todo;

    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            todo = todos[i];
            todos.splice(i, 1);
        }
    }

    return todo || 'task not found';
}

function editTask(id, text){
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = +id;
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    let todo;

    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            todos[i].text = text;
            todo = todos[i];
        }
    }

    return todo || 'task not found';
}


// Задачи
//1

function multiply() {
    let result = 1,
        max = arguments.length;

    for (let i = 0; i < max; i++){
        if (arguments[i] === 0)return new Error('multiplication by 0');
        if (isNaN(arguments[i]))return new Error('it must be a number');

        result *= arguments[i];
    }

    if (!max)return ('empty request');
    else return result;
}

//3
function reverseString(string) {
    //это проверка если функция не должна работать с числами
    if (typeof string !== 'string' || typeof +string !== 'string') return new Error('text is not a string');
    if (!string.length)return new Error('text empty');

    let reverseString = '';
    for (let i = string.length-1; i >= 0; i--){
        reverseString += string[i];
    }

    return reverseString;
}