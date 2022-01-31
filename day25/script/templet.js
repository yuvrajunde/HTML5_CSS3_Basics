$(document).ready(function(){
	// alert()
	$(".record").mouseover(function(){
		// alert()
		$(this).css({
			"transform":"scale(1.1)",

			"transition":"transform 1s"
		})
		$(".record").not (this).css({
			"transform":"scale(0.8)",
			"transition":"transform 1s"
		})
	})
	$(".record").mouseleave(function(){
		$(".record").css({
        			"transform":"scale(0.9)",
        			"transition":"transform 1s"
        		})
	})

})