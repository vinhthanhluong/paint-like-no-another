export default function SlideProductModule() {
    function slideThumbs() {

        if (document.querySelector('#slide-thumbs')) {
            const swiper = document.querySelector('#slide-thumbs');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const thumbsmall = new Swiper('#thumbs-small', {
                    speed: 1000,
                    // loop: true,
                    // spaceBetween: 10,
                    slidesPerView: 6,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    direction: "vertical",
                    // breakpoints: {
                    //     320: {
                    //         spaceBetween: 10,
                    //         slidesPerView: 3,
                    //     },

                    //     768: {
                    //         spaceBetween: 10,
                    //         slidesPerView: 4,

                    //     }
                    // }
                });

                const thumbbig = new Swiper('#thumbs-big', {
                    speed: 1000,
                    // loop: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 4000,
                    },
                    thumbs: {
                        swiper: thumbsmall,
                    },
                    pagination: {
                        el: SliderPagination,
                        type: "fraction",
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: true,
                    },
                });
                //  click slide
                // if ($('.pro-color.cl-w').length) {
                //     $('.pro-color.cl-w').on('click', function () {
                //         thumbbig.slideTo(1);
                //     });
                // }
            }
            catch (err) {
                console.log(err)
            }
        }

    }

    $('#slide-thumbs').length && slideThumbs();


    function thumbColor() {

        if (document.querySelector('#thumb-color')) {
            const swiper = document.querySelector('#thumb-color');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            const sliderScrollbar = swiper.querySelector('.swiper-scrollbar');
            try {
                const thumbsmall = new Swiper('#thumb-sm', {
                    speed: 1000,
                    // loop: true,
                    // spaceBetween: 50,
               
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 4,
                        },
                        576: {
                            slidesPerView: 5,
                        },

                        768: {
                            slidesPerView: 6,
                        }
                    },

                    scrollbar: {
                        el: sliderScrollbar,
                        hide: true,
                    },
                });

                const thumbbig = new Swiper('#thumb-bg', {
                    speed: 1000,
                    // loop: true,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    // autoplay: {
                    //     delay: 4000,
                    // },
                    thumbs: {
                        swiper: thumbsmall,
                    },
                    pagination: {
                        el: SliderPagination,
                        type: "progressbar",
                    },
                   
                });
                //  click slide
                // if ($('.pro-color.cl-w').length) {
                //     $('.pro-color.cl-w').on('click', function () {
                //         thumbbig.slideTo(1);
                //     });
                // }
            }
            catch (err) {
                console.log(err)
            }
        }

    }

    $('#thumb-color').length && thumbColor();

}