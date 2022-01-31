$(document).ready(function(){
	//alert()
	$(".articledata figure img").mousemove(function(mouseobj){
		$("#tooltip").css("display","block")
		var imgsrc=$(this).attr("src")

		$("#tooltip").html("<img src='"+imgsrc+"' style='width:200px; height:200px;'>")


		x = mouseobj.pageX
		y = mouseobj.pageY
		$("#tooltip").css({

			"left":x+30,
			"top":y+30
		})	

$(".articledata figure img").mouseleave(function(){
	$("#tooltip").css("display","none")
})
	})
})