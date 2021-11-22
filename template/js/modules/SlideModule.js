export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });

    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');

        const notslide = el.querySelector('.notslide');
        if (notslide) {
            var notSlide = true;
        } else {
            var notSlide = true;
        }
        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                // autoplay: {
                //     delay: 4000,
                // },
                allowTouchMove: notSlide,
                pagination: {
                    el: pagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                loop: true,
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-banner')) {
        const swiper = document.querySelector('.swiper-banner');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                // spaceBetween: 20,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            });
            swiper.on('slideChangeTransitionStart', function () {
                if (swiper.el.querySelector('.swiper-slide-active video')) {
                    swiper.el.querySelectorAll('.swiper-slide video').forEach((x) => x.pause());
                }
            });

            const muteVideoWhenOverScroll = () => {
                const pinStopVideo = document.querySelector('.banners').offsetHeight;
                if (window.scrollY >= pinStopVideo) {
                    swiper.el.querySelectorAll('.swiper-slide video').forEach((x) => x.pause());
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-type')) {
        const swiper = document.querySelector('.swiper-type');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1200,
                loop: true,
                slidesPerView: 'auto',
                autoHeight: true,
                // mousewheel: true,
                allowTouchMove: false,
                autoplay: {
                    delay: 5000,
                },

                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                // breakpoints: {
                //     320: {

                //         allowTouchMove: false,
                //     },

                //     768: {
                //         allowTouchMove: false,
                //     }
                // }
            });
        }



        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-pagi')) {
        const swiper = document.querySelector('.swiper-pagi');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                slidesPerView: 'auto',

                pagination: {
                    el: SliderPagination,
                    clickable: true,
                    type: "fraction",
                    renderFraction: function (currentClass, totalClass, index) {
                        return '<span class="' + currentClass + '">' + 0 + (index + 1) + "</span>"
                            + ' / ' +
                            '<span class="' + totalClass + '">' + 0 + (index + 1) + "</span>";
                    },

                },

                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-partners')) {
        const swiper = document.querySelector('.swiper-partners');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                spaceBetween: 0,
                // slidesPerView: 5,
                // autoplay: {
                //     delay: 4000,
                // },
                // allowTouchMove: false,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1200: {
                        allowTouchMove: false,
                        slidesPerView: 5,

                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-demo')) {
        const swiper = document.querySelector('.swiper-demo');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}