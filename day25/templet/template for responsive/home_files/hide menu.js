$(document).ready(function(){
// alert()
	height1= $("#header").height()
	// alert(height1)
	$(window).scroll(function(){
// alert()
			if ($(window).scrollTop()>height1)
			{
				$("#hiddenmenu").slideDown()
				$("#topslider").css("display","block")
				$("#hiddenmenu ul").css({
					'background' : "rgb(30,30,30)"
				})
			}
			else
			{
				$("#hiddenmenu").slideUp()
				// $("#menu").css("position", "static")
				$("#topslider").css("display", "none")
				$("#hiddenmenu ul").css({
					'background' : "#17A224"
				})
			}
			})

	$("#topslider").click(function(){
		$("body").animate({
			'scrollTop':0
		},1000)
	})
})
