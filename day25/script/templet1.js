$(document).ready(function(){
	// alert()
	$(".record1").mouseover(function(){
		// alert()
		$(this).css({
			"transform":"scale(1.1)",

			"transition":"transform 1s"
		})
		$(".record1").not (this).css({
			"transform":"scale(0.8)",
			"transition":"transform 1s"
		})
	})
	$(".record1").mouseleave(function(){
		$(".record1").css({
        			"transform":"scale(0.9)",
        			"transition":"transform 1s"
        		})
	})

})