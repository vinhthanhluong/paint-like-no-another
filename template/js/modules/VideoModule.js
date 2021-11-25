export default function VideoModule() {
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


    //contact-video

    if ($('.bx-video').length) {
        const videoWhenOverScroll = () => {
            const video = document.querySelector('.bx-video');
            const heightVideo = video.offsetTop;

            // console.log(heightVideo);

            // console.log(window.scrollY);

            if (window.scrollY <= heightVideo) {
                video.querySelectorAll('.bx-video video').forEach((x) => x.pause());
            }
        }

        window.addEventListener('scroll', videoWhenOverScroll);
    }

}