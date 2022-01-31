$(document).ready(function(){
cflag=0;
	if(cflag==0)
	{
		$(window).scroll(function(){
			if($(window).scrollTop()>0)
				return;
		})
	}
	$(window).load(accordian)
	$(window).resize(accordian)
	var menusliderflag=0
	$("#menuslider").click(function(){
		// alert()
		if(menusliderflag==0)
		{
			$("#slidemenu").animate({
				"margin-left":"0"
			},1000)
			menusliderflag=1;
		}
		else
		{
			$("#slidemenu").animate({
				"margin-left":"-152px"
			},1000)
			menusliderflag=0;
		
		}	
	})
	headmenuflag=0
	$("#headmenu").click(function(){
		
		if(headmenuflag==0)
		{
			$("#headmenu").nextAll().show()
			headmenuflag=1
		}
		else
		{
			$("#headmenu").nextAll().hide()
			headmenuflag=0
		
		}
	})
		
	

		$("#circle").click(function(){
			cflag=1;
 			// alert()
 			$("#leftcurtain,#rightcurtain").animate({
 				"width":"0"
 			},1000)
 			$(this).animate({
 				"top":"-200px"
 			},1000)
 			$(".record:not(:first)").css("margin-left","100%")
		$(".circle:not(:first)").css("background","white")

		$(".circle:eq(0)").css("left","42%")
		$(".circle:eq(1)").css("left","44%")
		$(".circle:eq(2)").css("left","46%")
		$(".circle:eq(3)").css("left","48%")
		
		var i=0
		setInterval(function(){
			// alert()
			$(".record:eq("+i+")").animate({
				"margin-left":"-100%"


			},1000)
			$(".record:eq("+i+")").fadeOut(1000);
			$(".record:eq("+i+")").animate({
				"margin-left":"100%"


			},1000)
			$(".record:eq("+i+")").fadeIn(1000);

			$(".circle:eq("+i+")").css("background","white")
			i=(i+1)%4
  			$(".record:eq("+i+")").animate({
				"margin-left":"0%"
			},1000)
			
			$(".circle:eq("+i+")").css("background","red")
			
			
		},2000)
 		})


	function accordian()
	{
		var screenwidth = $(window).innerWidth()
		// alert(screenwidth)
		$(".fdata.bottommenu").css("display","none")
		
		if(screenwidth>=200 && screenwidth<=600)
		{
			$(".fdata:first.bottommenu").css("display","none")
			$(".fdata h2").click(function(){
				if($(this).next().is(":visible")==false)
				{
					$(".bottommenu").slideUp(500)
					$(this).next().slideDown(500)
				}
			})
			$("#headmenu").nextAll().hide()
		}
	else
	{
		$(".fdata.bottommenu").css("display","block")
		$("#headmenu").nextAll().show()
		$("#slidemenu").css("margin-left","-152px")
		menusliderflag=0
		headmenuflag=0
			
		}
	}


})