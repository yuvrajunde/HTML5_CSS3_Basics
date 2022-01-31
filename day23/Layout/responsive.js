$(document).ready(function(){
	
	$(window).load(accordian)
	$(window).resize(accordian)

	var menusliderflag=0
	$("#menuslider").click(function(){
		

		if(menusliderflag==0)
		{    
		  	$("#slidemenu").animate({
				"margin-left":0
			},1000)
			menusliderflag=1
		}
		else
		{   
			$("#slidemenu").animate({
				"margin-left":"-152px"
			},1000)
			menusliderflag=0
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

	function accordian()
	{
		var screenwidth =$(window).innerWidth()
		//alert(screenwidth)

		if(screenwidth>=200 && screenwidth<=600)
		{
			$(".fdata:first .bottommenu").css("display","block")
			$(".fdata h2").click(function(){

				if($(this).next().is(":visible") == false)
				{
					$(".bottommenu").slideUp(1000);
					$(this).next().slideDown(1000)
				}
			})
			$("#headmenu").nextAll().hide()
		}
		else
		{
			$(".fdata .bottommenu").css("display","block")
			$("#slidemenu").css("margin-left","-152px")
			menusliderflag= 0
			headmenuflag=0


		}
	}
})