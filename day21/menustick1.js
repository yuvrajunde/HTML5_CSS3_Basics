$(document).ready(function(){
	height1=$("header").height()
	$(window).scroll(function(){
		if($(window).scrollTop()>height1)
		{
			$("#hiddenmenu").slideDown(500)
			$("#topslider1").css("display","block")
		}
		else

		{
			$("#hiddenmenu").slideUp(500)
			$("#topslider1").css("display","none")
		}	
	})
	$("#topslider1").click(function(){
		$("body").animate({
			"scrollTop":0
		},500)
	})
	
})