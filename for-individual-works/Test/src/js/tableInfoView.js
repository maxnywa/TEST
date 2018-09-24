import {elements} from "./base";

export const clearTableInfo = () => elements.tableInfo.innerHTML = '';

export const createTableInfoItem = (user,index) => {
    const markup = `
        <tr data-id="${user.id}" class="users-item">
        <td>${index}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.comments}</td>
        <td><button class="btn btn-danger delete-user">Delete</button></td>
        <td><button class="btn btn-primary edit-user">Edit</button></td>
      </tr>
    `

    elements.tableInfo.insertAdjacentHTML("beforeend", markup)
};

export const deleteUsersItem = (id) =>{

    document.querySelector(`.users-item[data-id = "${id}"]`).remove();
};

export const showError = (err)=>{
    clearMsgBox();
    const template = `      
            <div class="alert alert-danger col-8 mx-auto" role="alert">${err}</div>    
        `;

   document.querySelector('.msg-box').insertAdjacentHTML("afterbegin", template);
};

export const clearMsgBox = ()=>{
    document.querySelector('.msg-box').innerHTML = "";
};