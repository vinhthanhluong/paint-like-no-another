export default function CartBagModule() {
    // popup-big
    $('.heart-title').on('click', function () {
        $('.heart-popup').css('right', 0);
        $('body').addClass('modal-open');
    });

    $('.heart-popup .btn-close , .bg-cart').on('click', function () {
        $('.heart-popup').css('right', "-100%");
        $('body').removeClass('modal-open');
    });

    //popup-small
    if ($('.header-heart')) {
        const $cart = $('.header-cart');

        $(document).mouseup(function (e) { 
            if(!$cart.is(e.target) && $cart.has(e.target).length === 0){
                $cart.removeClass('active');
            }
        });

        $('.cart-btn').on('click', function () {
            $cart.toggleClass('active');
        });
    }

}