export default function DisableModule() {
    if ($('#disable-form').length) {
        $(".pro-input.disable").prop('disabled', true);

        $(".product-inner.sold-out").click(function (e) {
            e.preventDefault();
        });
    }

    if ($('.box-signup-login')) {
        $('.act-but').on('click', function () {
            var pass =  $(this).prev();
            if (pass.attr("type") === "password") {
                pass.attr("type" , "text");
            }else{
                pass.attr("type" , "password");
            }

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


}