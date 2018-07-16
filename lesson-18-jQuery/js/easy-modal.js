;(function ($) {
    class Modal{
        constructor(element, options){
            this.modal = element;
            this.defaultOptions = {
                closeClass: '.close-modal',
                overlayOpacity: 0.7,
                duration: 500,
                autoClose: false,
                autoCloseTime: 3000
            };
            this.options = $.extend(this.defaultOptions, options)
        }

        init(){
            this.showOverlay()
                .done(this.showModal()
                    .done(this.setEvents())
                );
        }

        showOverlay(){
            $('body').css({'overflow-y': 'hidden'});
            let def = $.Deferred();

            const overlay = $('<div class="overlay"></div>').css({
                'display':'block',
                'position':'fixed',
                'top':0,
                'left':0,
                'width':'100%',
                'height':'100%',
                'z-index':'999',
                'opacity':'0',
                'background-color':`rgba(0,0,0, ${this.options.overlayOpacity})`
            });

            this.modal.before(overlay);
            return def.resolve();
        }

        showModal(){
            let def = $.Deferred();
            if (this.calcModalSize()) def.reject();
            const {halfWidth,halfHeight} = this.calcModalSize();

            $('.overlay').animate({
                'opacity':'1'
            },this.options.duration)

            this.modal.css({
                'display':'block',
                'position':'fixed',
                'top':'50%',
                'left':'50%',
                'z-index':1000,
                'opacity':'0',
                'margin-top':`-${halfHeight}px`,
                'margin-left':`-${halfWidth}px`,
            }).animate({
                'opacity':'1'
            },this.options.duration);

            if (this.options.autoClose){
                setTimeout(()=>{
                    this.closeModal()
                },this.options.autoCloseTime)
            }

            return def.resolve();
        }

        closeModal(){
            $('body').css({'overflow-y': 'auto'});
            $('.overlay')
                .animate({'opacity':0},this.options.duration, () =>{$('.overlay').remove()})

            this.modal.animate({
                'opacity':0
            },this.options.duration, () =>{
                this.modal.css({'display':'none'})
            });

            this.clearEvents();
        }

        setEvents(){
            $('.overlay').on('click', (e) => this.closeModal());
            $(this.options.closeClass).on('click', (e) => this.closeModal())
        }

        clearEvents(){
            $('.overlay').off('click');
            $(this.options.closeClass).off('click');
        }

        calcModalSize(){
            const halfWidth = this.modal.outerWidth()/2;
            const halfHeight = this.modal.outerHeight()/2;

            return{
                halfWidth,
                halfHeight
            }
        }

    }


   $.fn.easyModal = function (options) {
        new Modal(this, options).init();
   }
})(jQuery);