// Task model
let tasks = [
    {
        text: 'Learn JS',
        id: '1'
    },
    {
        text: 'Learn Angular',
        id: '2'
    },
];

let ul = document.querySelector('.list-group');

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    //create li element
    let li = document.createElement('li');
    //add text to li element
    li.textContent = task.text;
    //add attribute
    li.setAttribute('data-id', task.id);
    //add class
    li.classList.add('list-group-item')
    return li;
}

// AddTask
function  addTask(text) {
    //create task obj
    const newTask ={text,id:String(tasks.length+1)};
    // add task on tasks
    tasks.unshift(newTask);
    //add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask));
}

// Delete task
function deleteTask(id) {
    //Remove from array
    tasks.forEach(task =>{
        if(task.id === id)tasks.splice(tasks.indexOf(task))
    });
    //remove from document
    let li = document.querySelector('li');
    if (li.dataset.id === id) ul.removeChild(li);
}

// Alert
function message(text) {
    //remove alert message
    let message = document.querySelector('.alert');
    if ( message !== null )message.remove();
    //create new div for alert message
    message = document.createElement('div');
    //add classes
    message.className = 'alert alert-info';
    //add text to div
    message.textContent = text;
    //add div to document
    document.querySelector("div.container").insertAdjacentElement("afterbegin", message);
}