$(document).ready(function(){
	$(".hamburger-button").on("click", function(){
		$(".sp-nav").slideToggle();
	});

    $(".sp-nav-list").on("click", function(){
        $(".sp-nav").slideToggle("active");
    });
});