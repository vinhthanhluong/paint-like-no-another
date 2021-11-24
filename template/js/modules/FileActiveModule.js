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



    // video
    var videos = document.querySelectorAll(".video");
    if (videos) {
        for (let video of videos) {
            video.onplay = () => {
                video.parentElement.classList.add("playing");
            }
            video.onpause = () => {
                video.parentElement.classList.remove("playing");
            }
        }
    }

    $('.bx-video').on('click', function () {
        $(this).find('.video-title').addClass('active');
        $(this).find('.banner-wrap-form').addClass('active');
    });

    // if ($('.banners').length) {
    //     const formBanner ;

    // }

    if ($('.box-chat').length) {
        $($('.social-chat')).on('click', function () {
            $('.box-chat').addClass('active');
        });

        $('.chat-close').on('click', function () {
            $('.box-chat').removeClass('active');

        });
    }

    //contact-video

    if ($('.bx-video').length) {
        const videoWhenOverScroll = () => {
            const video = document.querySelector('.bx-video');
            const heightVideo = video.offsetTop;

            console.log(heightVideo);

            console.log(window.scrollY);

            if (window.scrollY <= heightVideo) {
                video.querySelectorAll('.bx-video video').forEach((x) => x.pause());
            }
        }

        window.addEventListener('scroll', videoWhenOverScroll);
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




}





