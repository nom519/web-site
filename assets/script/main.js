$(document).ready(function(){
    // ハンバーガーメニュー
	$(".hamburger-button").on("click", function(){
		$(".sp-nav").slideToggle();
	});

    $(".sp-nav-list").on("click", function(){
        $(".sp-nav").slideToggle();
    });

    $(window).resize(function(){
        $(".sp-nav").hide();
    });


    // カルーセル
    $('.carousel').slick({
		autoplay: false,
		autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
    });

    // アコーディオン
    $('.js-accordion__title').click(function(){
        $(this).next('.js-accordion__answer').slideToggle();
        $(this).toggleClass("open");
    });
});

