class AnimateNews {
    animationOpacityNews(element) {

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


}
