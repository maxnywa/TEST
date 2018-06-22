class Http {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    get(url, callback) {
        this.http.open("GET", url);
        const self = this;
        this.http.addEventListener("load", function () {
            if (self.http.status === 200) {
                callback(null, JSON.parse(self.http.responseText));
            } else {
                callback(`Error: ${self.http.status}`, null);
            }
        });

        this.http.send();
    };
}
 class User {
    constructor(id,name,username,company){
        this.id = id;
        this.name = name;
        this.username = username;
        this.company = company.name;
    }
 }

class Ui {
    addUserToList(user) {
        //Get User list
        const list = document.querySelector('.list-group');
        //Create markup)
        const li = `
            <li class="list-group-item dropright" id = ${user.id}>
                <div class="dropdown-toggle" id = ${user.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${user.name}
                </div>
            </li>
        `;
        list.insertAdjacentHTML("beforeend", li);
    }

    showUserInfo(user){
        const li = document.getElementById(`${user.id}`);
        let info = '';
        info = `
            <div class="dropdown-menu" aria-labelledby = ${user.id}>
                <span class="d-block">Username: ${user.username}</span>
                <span class="d-block">Company: ${user.company}</span>
            </div>
        `;
        li.insertAdjacentHTML("beforeend", info);
    }
}

let http = new Http();
let users;

http.get("https://jsonplaceholder.typicode.com/users", function (err, res) {
    if (err) return new Error(err);

    users = res;
    const ui = new Ui();

    users.forEach(elem => {
    const user = new User( elem.id,elem.name,elem.username,elem.company);
    ui.addUserToList(user);
    })

});

document.querySelector('ul.list-group').addEventListener('click',function (e) {
    const li = e.target.closest('li');
    const ui = new Ui();
    if(li.classList.contains('list-group-item')){
        const id = li.getAttribute('id');
        users.forEach(elem => {
            if(elem.id == id) {
                const user = new User( elem.id,elem.name,elem.username,elem.company );
                ui.showUserInfo(user);
            }
        });

    }
});




