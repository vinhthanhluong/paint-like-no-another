export default function SlideModule() {

    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');

        const heightAuto = el.querySelector('.heightauto');
        if (heightAuto) {
            var heightChange = true;
        } else {
            var heightChange = false;
        }

        const notSlide = el.querySelector('.notslide');
        if (notSlide) {
            var slideTouchMove = false;
        } else {
            var slideTouchMove = true;
        }

        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: heightChange,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                // autoplay: {
                //     delay: 4000,
                // },
                allowTouchMove: slideTouchMove,
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
            window.addEventListener('scroll', muteVideoWhenOverScroll);


            $('.banners-inner .video').on('click', function () {
                $(this).next().find('.video-title').addClass('active');
            });
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
                autoplay: {
                    delay: 4000,
                },

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

    if (document.querySelector('.swiper-card')) {
        const swiper = document.querySelector('.swiper-card');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // spaceBetween: 20,
                slidesPerView: 2,
                direction: "vertical",
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


    //slide fullpgae
    // new fullpage('#fullpage', {
    //     navigation: false,
    //     // responsiveWidth: 700,
    //     // anchors: ['home', 'about-us', 'contact'],
    //     parallax: true,
    //     parallaxOptions: {
    //         type: 'cover',
    //         percentage: 62,
    //         property: 'translate'
    //     },
    // 	slidesNavigation: true,
    // 	scrollingSpeed: 1000,
    // 	autoScrolling: true,
    // 	fitToSection:false,

    //     // onLeave: function (origin, destination, direction) {
    //     //     console.log("Leaving section" + origin.index);
    //     // },
    // });

}