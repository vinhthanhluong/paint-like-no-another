export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.header-user')) {

        const $user = $('.header-user');
        $(document).mouseup(function (e) {
            // nếu click vàp mục tiêu k phải là vùng chứa và cũng k phải là con của vùng chứa
            if (!$user.is(e.target) && $user.has(e.target).length === 0) {
                $user.removeClass('active');
            }
        });

        $('.header-user').on('click', function () {
            $user.toggleClass('active');
        });
    }


    let $width = $(window).width();
    if ($width < 1200) {
        $('.box-lang').appendTo('.lang-mobi');
    } else {
        $('.box-lang').appendTo('.header-lang');
    }
  

    if ($('.box-chat').length) {
        $($('.social-chat')).on('click', function () {
            $('.box-chat').addClass('active');
        });

        $('.chat-close').on('click', function () {
            $('.box-chat').removeClass('active');

        });
    }

    

    // if ($('.line-eff').length) {
    //     // $('.line-eff').on('hover', function () {
    //     //     $(this).addClass('avtice');
    //     // },
    //     //     function () {
    //     //         alert('asdasd');
    //     //     }
    //     // );

    //     $(".line-eff").hover(function () {
    //         $(this).addClass('line-active');
    //     },
    //     function () {
    //         $(this).removeClass('line-active');
    //     });

    // }

    if ($('.contact-form'.length)) {
        $('.contact-tt-main').on('click', function () {
            $('.contact-form').addClass('active');
        });
        $('.contact-close').on('click', function () {
            $('.contact-form').removeClass('active');
        });
    }

    if ($('.product-f-box').length) {
        $('.fm-title').on('click', function () {
            $(this).parent().toggleClass('active');
            $(this).next().slideToggle();
        });
        
    }

    if ($('.f-color').length) {
        $('.f-color').on('click', function () {
            $('.color-popup').addClass('active');
        });
        $('.product-close').on('click', function () {
            $('.color-popup').removeClass('active');
        });
        
    }





}





