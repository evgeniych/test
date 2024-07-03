
$('.boxes .box').click(function (e) {
    e.preventDefault();
    let curentBox = $(this);

    // Add tremmor animation when click box
    function animateTremor() {
        curentBox.animate({ left: '-1px' }, 95)
            .animate({ left: '4px' }, 95)
            .animate({ left: '-18px' }, 95)
            .animate({ left: '18px' }, 95)
            .animate({ left: '-25px' }, 95)
            .animate({ left: '25px' }, 95)
            .animate({ left: '-8px' }, 95)
            .animate({ left: '4px' }, 95)
            .animate({ left: '-2px' }, 95)
            .animate({ left: '0px' }, 95);
    }

    // animateTremor();

    // setTimeout(() => {
        $('.boxes .box').addClass('noclick');
        setTimeout(function () {
            $('.boxes .box').removeClass('noclick');
        }, 2000);
        if (curentBox.hasClass('active')) {
            console.log('has active');
        } else {
            curentBox.addClass('active');
            curentBox.addClass('noclick');
            curentBox.find('.box__front').css('display', "none");
            curentBox.find('.box__inner').css('background-image', "url('./assets/boxes/box2.png')");
            setTimeout(function () {
                $('.two_modal_icon').fadeIn();
                $('.boxes .box').addClass('second-step');
                $('.boxes .box.active').removeClass('second-step');
            }, 1000);
        }
        if (curentBox.hasClass('second-step')) {
            curentBox.addClass('active');
            curentBox.addClass('noclick');
            curentBox.find('.box__front').css('display', "none");
            curentBox.find('.box__inner').css('background-image', "url('./assets/boxes/box-paleta.png')");
            setTimeout(function () {
                $('.two_modal_icon_Two').fadeIn();
                $('.two_modal_icon').remove();
            }, 1000);
        }
    // }, 850);

    
});


$('.click_me_pidor').click(function (e) {
    e.preventDefault();
    $('.two_modal_icon').fadeOut();
});

$('.js-pickup').click(function (e) {
    e.preventDefault();
    $('.loader-wrp').fadeIn();
    $('#game').fadeOut();
    $('#comments_display_one').hide();
    $('#page_two').hide();
    setTimeout(function () {
        $('.order-data-wrp').removeClass('hidden');
        $('.order-data-wrp').show();
        $('.loader-wrp').fadeOut();
        $('.cart-content').css('z-index', '9');
    }, 2000);
});