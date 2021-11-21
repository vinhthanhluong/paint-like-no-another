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

    $('.banners-inner').on('click', function () {
        $(this).find('.video-title').addClass('active');
    });

    


}





