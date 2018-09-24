
export let defaultUsers = [
    {id: 1, name: "Leanne Graham",email: "Sincere@april.biz",comments:''},
    {id: 2, name: "Ervin Howell",email: "Shanna@melissa.tv",comments:''},
    {id: 3, name: "Clementine Bauch",email: "Nathan@yesenia.net",comments:''},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org",comments:''},
    {id: 5, name: "Chelsey Dietrich",email: "Lucio_Hettinger@annie.ca",comments:''}];

export const elements = {
    table: document.querySelector('.table'),
    tableInfo: document.querySelector('.table-info'),
    form: document.forms['user-form'],
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    comments: document.querySelector('#comments'),
    msg: document.querySelector('.msg'),
    updateBtn: document.querySelector('.update'),
    saveBtn: document.querySelector('.save'),
    cancelBtn: document.querySelector('.cancel-edition')
};
