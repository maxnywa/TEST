class Alert {
    creatAlert(msg) {
        let alertBox = document.querySelector('.alert-box');
        // if(alertBox.querySelector('.alert')) alertBox.querySelector('.alert').remove();

        const alert = document.createElement('div');
        alert.classList.add('alert', `${msg.error ? 'alert-danger' : 'alert-success'}`);
        alert.textContent = msg.text;
        alert.style.opacity = 0;
        alertBox.insertAdjacentElement("beforeend", alert);

        return alert;
    }

    showAlert(msg) {
        const alert = this.creatAlert(msg);
        this.animationOpacityElement(alert)
            .then((element)=>{
                return this.animationUpriseElement(element)
            })
            .then((element)=>{
                return this.deleteAlert(element)
            })
    }

    animationOpacityElement(element) {

        return new Promise(function (resolve,reject) {
            let step = 0;

            function animateAction(time) {
                step += 0.02;

                element.style.opacity = step;

                const raf = requestAnimationFrame(animateAction);

                if (parseFloat(element.style.opacity) >= 1) {
                    cancelAnimationFrame(raf);
                    return resolve(element);
                }
            }

            animateAction();
        })

    }

    animationUpriseElement(element) {
        return new Promise(function (resolve,reject) {
            let step = 0;
            let startTime = Date.now();

            function animateAction(time) {
                step -= 2;

                element.style.transform = `translateY(${step}px)`;

                const raf = requestAnimationFrame(animateAction);
                if ( Date.now() - startTime > 2000) {
                    cancelAnimationFrame(raf);
                    return resolve(element);
                }
            }
            animateAction();
        })
    }

    deleteAlert(element){

        function animateAction(time) {
            element.style.opacity = (+element.style.opacity)-0.02;

            const raf = requestAnimationFrame(animateAction);

            if (parseFloat(element.style.opacity) === 0) {
                cancelAnimationFrame(raf);
                setTimeout(()=>{
                    document.querySelector('.alert').remove();
                },1000)
            }
        }

        animateAction();
    }
}

