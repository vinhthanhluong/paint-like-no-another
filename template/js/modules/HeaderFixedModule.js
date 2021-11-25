export default function ScrollTopModule() {

    if ($('.header').length) {
      
        $(window).scroll(function () {
           
            //console.log(pod);
            var $this = $('.header');
            const pod = $('html,body').scrollTop();
            if ($this.hasClass('header-home')) {
              
                if (pod > 20) {
                    $('.header').addClass('--fix');
                    $('.main').css("margin-top", "120px");
                } else {
                    $('.header').removeClass('--fix');
                    $('.main').css("margin-top", "0");
                }
            }else{
                if (pod > 20) {
                    $('.header').addClass('--fix');
                    $('.main').css("margin-top", "80px");
                } else {
                    $('.header').removeClass('--fix');
                    $('.main').css("margin-top", "0");
                }
            }

         
        });
    }





}