//Home work
const btnMsg = document.querySelector('.btn-msg');
const sectionHW = document.querySelector('.home-work');

// Events
//onclick
btnMsg.addEventListener('click',function (evn) {
    alert(btnMsg.innerHTML);
});
//onmouseover
btnMsg.addEventListener('mouseover',function (evn) {
    btnMsg.classList.add('btn-danger');
});
btnMsg.addEventListener('mouseout',function (evn) {
    btnMsg.classList.remove('btn-danger');
});

//3
document.addEventListener('click',function (evn) {
    if(evn.target.id === "tag")console.log(evn.target.tagName);
});

//Forms
const whatToWear = [
    {"лето":"одень футболку и шорты"}, {"осень":"одень куртку и штаны"},
    {"зима":"одень шубу и теплые штаны"}, {"весна":"одень ветровку и джинсы"},
];
let whatToWearNeed =[];
whatToWear.forEach(value => {
    let obj= {};
    for (let seas in value){
        obj.season = seas;
        obj.wear = value[seas];
    }
    whatToWearNeed.push(obj);
});
 console.log(whatToWearNeed);

//Create elements
let forms = document.createElement('form');
let select = document.createElement('select');
let inputText = `<input type = text placeholder="" id="wear">`;

//add to doc
sectionHW.insertAdjacentElement("afterbegin", forms);
forms.insertAdjacentElement("afterbegin",select);
forms.insertAdjacentHTML('beforeend',inputText);
document.getElementById('wear').value = whatToWearNeed[0].wear;

whatToWearNeed.forEach(({season},index) =>{
    let options= new Option(season);
    select.insertAdjacentElement("afterbegin", options);
    options.setAttribute('value',index);
} );

//Events
select.addEventListener('change',wear);

function wear(evn) {
   document.getElementById('wear').value = whatToWearNeed[select.value].wear;
}

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

const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');
const listContainer = document.querySelector('.list-card .card-body');
const form = document.forms['addTodoItem'];
const input = form['todoText'];
const addBtn = document.querySelector('.add-task-btn');


// Events
clearBtn.addEventListener('click', clearList);
form.addEventListener('submit',onSubmit);
input.addEventListener('keyup',function(evn) {
    addBtn.disabled = !(input.value.length > 2);
});
ul.addEventListener('click',listEvents );



//Generate tasks
tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

//onSubmit form
function  onSubmit(evn) {
    evn.preventDefault();
    const value = input.value;
    addTask(value);
}

//listEvents
function listEvents(evn) {
    if(evn.target.classList.contains('delete-task')){
        const parent = evn.target.closest('li');
        const id = parent.dataset.id;
        parent.remove();
        deleteTask(id);

        if(!tasks.length)showAlertEmpty('List empty');
    }
}

//Clear list
function clearList(evn) {
    evn.preventDefault();
    tasks = [];
    ul.innerHTML = '';
    showAlertEmpty('List empty');

    return 'Success'
}

//Show alert empty list
function showAlertEmpty(Text) {
    const alert = alertTemplate(Text);
    const currentAlert = listContainer.querySelector('.alert');

    if (currentAlert) currentAlert.remove();
    listContainer.insertAdjacentHTML("afterbegin", alert);
    return 'Success'
}

//Alert template
function alertTemplate(text) {
    return `<div class="alert alert-info">${text}</div>`;
}

// Task list template
function listTemplate(task) {
    //create li element
    const li = document.createElement('li');
    const deleteIcon = `<i class="fas fa-trash-alt delete-task"></i>`;
    //add text to li element
    li.textContent = task.text;
    li.insertAdjacentHTML("beforeend", deleteIcon);
    //add attribute
    li.setAttribute('data-id', task.id);
    //add class
    li.classList.add('list-group-item');
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
}

// Alert
function message(text) {
    //remove alert message
    let message = document.querySelector('.alert');
    if (message)message.remove();
    //create new div for alert message
    message = document.createElement('div');
    //add classes
    message.className = 'alert alert-info';
    //add text to div
    message.textContent = text;
    //add div to document
    document.querySelector("div.container").insertAdjacentElement("afterbegin", message);
}
