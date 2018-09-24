export const getUsers = ()=>{
    return JSON.parse(localStorage.getItem("users"));
};
export const setUsers = (users)=>{
    localStorage.setItem('users', JSON.stringify(users));
};

export const deleteUser = (id)=>{
    let users = getUsers();
    users.forEach((user,index)=>{
        if(user.id == id ){
            users.splice(index,1)
        }
    });
    localStorage.setItem('users', JSON.stringify(users));
};

