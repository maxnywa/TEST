export  default class  User {
    constructor (name, email, comments){
        this.id = 'id' + (new Date()).getTime();
        this.name = name;
        this.email = email;
        this.comments = comments || '';
    }
};