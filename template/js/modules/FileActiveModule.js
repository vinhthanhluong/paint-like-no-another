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
        $('.contact-tt-fr').on('click', function () {
            $('.contact-wrapper').addClass('active');
        });
        $('.contact-close').on('click', function () {
            $('.contact-wrapper').removeClass('active');
            $('.contact-form').removeClass('active');
        });
    }

    if ($('.product-f-box').length) {
        $('.fm-title').on('click', function () {
            $(this).parent().toggleClass('active');
            // $(this).next().slideToggle();
        });
    }

    if ($('.f-color').length) {
        $('.f-color').on('click', function () {
            $('.color-popup').addClass('active');
            $('.product-detail > .container').addClass('active');
        });
        $('.product-close').on('click', function () {
            $('.color-popup').removeClass('active');
            $('.product-detail > .container').removeClass('active');
        });
    }

    if ($('.meu-item').length) {
        const width = $(window).width();
        if (width < 992) {
            $('.meu-item').on('click', function () {
                $(this).toggleClass('active');
                $(this).siblings().removeClass('active');
            });
        }
    }

    // if ($('.palette-choose').length) {

    //     $('.palette-choose .column').on('click', function () {
    //         $(this).closest('.palette-choose').find('.palette-column').addClass('show');
    //     });

    //     $('.palette-choose .color-close').on('click', function () {
    //         $(this).closest('.palette-choose').find('.palette-column').removeClass('show');
    //         // $(this).closest('.palette-choose').siblings().find('.palette-column').removeClass('show');
    //     });
    // }

    if ($('.palette-cl').length) {
        $('.palette-cl .palette-b').on('click', function () {
            $(this).addClass('active');
            $(this).closest('.col').siblings().find('.palette-b').removeClass('active');

        });

    }



    if ($('.color-heart').length) {

        $('.color-heart').on('click', function () {
            if ($(this).hasClass('show')) {
                $(this).removeClass('show');
                $(this).addClass('hide');
                return;
            }
            if ($(this).hasClass('hide')) {
                $(this).removeClass('hide');
                $(this).addClass('show');
            }
        });
    }

    if ($('.breadcrumb-menu')) {
        $('.bread-t').on('click', function () {
            $(this).parent().toggleClass('active');
        });
    }



    $(".tab-wrapper").each(function () {
        let tab = $(this);
        tab.find(".tab-link").first().addClass("current");
        let tabID = tab.find(".tab-link.current").attr("data-tab");
        tab.find(tabID).fadeIn().siblings().hide();
        $(tab).on("click", ".tab-link", function (e) {
            e.preventDefault();
            let tabID = $(this).attr("data-tab");
            $(this).addClass("current").siblings().removeClass("current");
            tab.find(tabID).fadeIn().siblings().hide();
        });
    });

    if ($('.not-login')) {
        $('.not-close').on('click', function () {
            $('.not-login').hide();
        });
    }

    function showcolor() {
        const _h = $('.palette-choose .column').outerHeight() + $('.color-content').outerHeight();
        $('.palette-choose .palette-inner').on('click', function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
            $(this).parent().css('height', _h).siblings().css('height', 'auto');
            $(this).parent().append($('.color-content'));
            $(this).next('.color-content').slideDown();
        });

        $('.color-close').on('click', function () {
            $('.color-content').slideUp('1000');

            setTimeout(function () {
                $('.palette-choose').find('.column').removeClass('active');
                $('.palette-choose').append($('.color-content'));
                $('.palette-choose').find('.column').css('height', 'auto');

            }, 400);

        });
    }
    showcolor();



    $('.palette-cl .col').on('click', function () {
        const index = $(this).children('.palette-b').data('color');
        const row = color.find((el) => el.id === index);
        $('.range-title').html(row["title"]);
        $('#rang-f').css('background-image', 'url(' + row["imgs"] + ')');

    });

    function chooseColor() {
        const indexs = $('.f-range').val();
        const num = Number(indexs);
        const rows = colors.find((el) => el.id === num);
        $('.palette-choose').append($('.color-content').css('display', 'none'));
        // const div = document.getElementById('palette-clr');
        $("#palette-clr").not('.color-content').empty();
        $.each(rows.col, function (i, f) {
            const AllColor =
                "<div class='column'>" +
                "<div class='palette-inner'>" +
                "<div class='color-inner' style='background-color:" + f.clr + "'>" + "</div>" +
                "</div>" +
                "</div>";

            $(AllColor).appendTo("#palette-clr");
        });
    }

    $('.palette-range .f-range').on('click', function () {
        chooseColor();
        showcolor();
        
    });

    // $('.palette-range .f-range').on('click', function () {

    //     $('.palette-choose').append($('.color-content').css('display', 'none'));
    //     $("#palette-clr").not('.color-content').empty();
    //     $.getJSON("./color.json", function (data) {
    //         var color = [];
    //         const indexs = $('.f-range').val();
    //         const num = Number(indexs);
    //         const rows = data.find((el) => el.id === num);
    //         $.each(rows.colors, function (i, f) {
    //             var AllColor =
    //                 "<div class='column'>" +
    //                 "<div class='palette-inner'>" +
    //                 "<div class='color-inner' style='background-color:" + f.clr + "'>" + "</div>" +
    //                 "</div>" +
    //                 "</div>";
    //             $(AllColor).appendTo("#palette-clr");
    //         });

    //         showcolor();
    //     });
        
    // });

}





