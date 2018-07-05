//Init Auth
const auth = new Auth;
const ui = new UI;

//Init elements
const form = document.forms['login-form'];
const email = form.elements['email'];
const password = form.elements['password'];
const passwordRepeat = form.elements['passwordRepeat'];

//Events
form.addEventListener('submit', onRegistration);

function onRegistration(e) {
    e.preventDefault();

    if(email.value && password.value && passwordRepeat.value){
        if (password.value === passwordRepeat.value){
            auth.register(email.value,password.value)
                .then(() => {
                    ui.showInfoRegistration();
                    setTimeout(()=>{
                        window.location = 'index.html';
                    },3000);
                })
                .catch(err =>{
                    ui.showLoginError(err);
                    setTimeout(()=>{
                        ui.clearLoginError();
                    },3000);
                    form.reset();
                })


        }
        else{
            const err = {};
            err.message = 'Passwords do not match';
            ui.showLoginError(err);
            setTimeout(()=>{
                ui.clearLoginError();
            },3000);
            form.reset();
        }
    }

}

