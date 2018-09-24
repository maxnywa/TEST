// Global app controller
import {elements, defaultUsers} from "./base";
import * as tableInfoView from "./tableInfoView"
import * as userStorage from "./userStorage"
import User from "./User"
import Http from "./http"


let users;
//let http = new Http();

const createUsers = ()=>{
    users.forEach((user, index)=>{
        tableInfoView.createTableInfoItem(user, index);
    });
};

const onLoad = ()=>{
    // При загрузке страницы получаем данные от сервера
   // elements.defaultUsers = http.get();

    if(!userStorage.getUsers()){
        users = defaultUsers;
        userStorage.setUsers(users);
        createUsers();

    } else {
        users = userStorage.getUsers();
        createUsers();
    }
};

const deleteOrEdit = (el)=>{
    if(el.target.closest('.delete-user')){
        const id = el.target.closest('.users-item').dataset.id;
        userStorage.deleteUser(id);
        tableInfoView.deleteUsersItem(id);
    } else if(el.target.closest('.edit-user')){
        const id = el.target.closest('.users-item').dataset.id;
        onEdit(id);
    }

};

const onEdit = (id) =>{
  users.forEach(user => {
      if(user.id == id){
          elements.name.value = user.name;
          elements.email.value = user.email;
          elements.comments.value = user.comments;
          elements.form.dataset.id = user.id;
      }
  })
};

const saveEdition = (id,userEdit) =>{
    users = userStorage.getUsers();
    users.forEach((user,index) => {
       if(user.id == id){
            users.splice(index,1,userEdit);
        }
    });
    userStorage.setUsers(users);
    tableInfoView.clearTableInfo();
    createUsers();
    elements.form.reset();
};

const addNewUserItem = (user)=>{
    users = userStorage.getUsers();
    users.push(user);
    userStorage.setUsers(users);
    tableInfoView.createTableInfoItem(user, users.length);
};

const onSubmit = (e) =>{
    console.log('sub');
    e.preventDefault();
    if(elements.name.value && elements.email.value) {
        if(elements.form.dataset.id){
            console.log("add");
            let user = new User (elements.name.value , elements.email.value ,elements.comments.value);
            saveEdition(elements.form.dataset.id,user);
        }else{
            let user = new User (elements.name.value , elements.email.value ,elements.comments.value);
            addNewUserItem(user);
        }
    }else{
        tableInfoView.showError('Name and email fields are required');
    }
};

const onCancel = ()=>{
    users = defaultUsers;
    userStorage.setUsers(users);
    elements.form.reset();
    createUsers();
    //Выводить окно для подтверждения сброса
};

const onSave = ()=>{
    //http.post(url,users);
    //defaultUsers = users;
    //Выводить сообщение о сохранении данных/ошибке
};

const onUpDate = ()=>{
  // http.get()
  //   .then(res =>{
  //       users = res;
  //       userStorage.setUsers(users);
  //       createUsers();,
    // Выводить сообщение об обновлении данных
  //   }
    // .catch(err =>{
    // Выводить сообщение об ошибке
    // });
};

//Set events
window.addEventListener("load",onLoad);
elements.tableInfo.addEventListener("click",deleteOrEdit);
elements.form.addEventListener("submit", onSubmit);
document.querySelector(".cancel").addEventListener("click", (e)=>{
   elements.form.reset();
});
elements.cancelBtn.addEventListener("click", onCancel);
elements.saveBtn.addEventListener("click", onSave);
elements.updateBtn.addEventListener("click", onUpDate);




