//Init Auth
const auth = new Auth;
const ui = new UI;

//Init elements
const form = document.forms['login-form'];
const email = form.elements['email'];
const password = form.elements['password'];
const registration = document.querySelector('.registration');


//Check auth state
firebase.auth().onAuthStateChanged(function(user) {
    if (user){
        window.location = 'index.html';
    }
});

//Events
form.addEventListener('submit', onLogin);
registration.addEventListener('click',onRegistration);

function  onLogin(e) {
    e.preventDefault();

    if(email.value && password.value){
        auth.login(email.value,password.value)
            .then(() => {
                window.location = 'index.html';
            })
            .catch(err =>{
                ui.showLoginError(err);
                setTimeout(()=>{
                    ui.clearLoginError();
                },3000);
                form.reset();
            })
    }
}

function onRegistration(e) {
    window.location = 'registration.html';
}