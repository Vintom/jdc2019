$(function() {
    $(".p-jdc-lastyear__slider").slick({
    	dots: true,
    	infinite: true,
    	autoplay: true,
    	autoplaySpeed: 1500,
    	responsive: [{
    		breakpoint: 768,
    		settings: {
    			arrows: false,
    			dots: false
    		}
    	}]
    });
});
