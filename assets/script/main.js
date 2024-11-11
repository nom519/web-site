$(document).ready(function(){
	$(".hamburger-button").on("click", function(){
		$(".sp-nav").slideToggle();
	});

    $(".sp-nav-list").on("click", function(){
        $(".sp-nav").slideToggle("active");
    });

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
    $('.js-accordion__title').click(function(){
        $(this).next('.js-accordion__answer').slideToggle();
        $(this).toggleClass("open");
    });
});

