$(document).ready(function (){

	// alert()

	$("#categories .p:not(:first)").hide()

	$("#categories h1").click(function(){
		// alert()
		if($(this).next().is(":visible")==false)
		{

			$(".p").slideUp(1000)
			$(".p").css("display","none")

			//alert()
			$(this).next().slideDown(1000)
		}
		else
		{
			$(this).next().slideUp(1000)
		}
		
	})


	
		$("#thumbnail-2").click(function(){

			$(".content").animate({

					'width' : '+465px',
					'height' : '+300px',
			})

		})


		$("#thumbnail-1").click(function(){

			$(".content").animate({

					'width' : '+300px',
					'height' : '+300px'
			})
			
		})

		$(".content").css("background","black")
		$(".content").mouseenter(function(){
			//alert()
			//$(".content").not(this).css("opacity", "0.5")
			$(this).css("opacity", "0.5")
			$(this).css({
				'transform' : 'scale(1.0)',
				'transition': 'transform 2s'
			})

			$(".content").not(this).css({
				'transform' : 'scale(0.8)',
				'transition': 'transform 2s'
			},1000)
		})

		$(".content").mouseleave(function(){
			//alert()
			$(".content").not(this).css("opacity", "1")
			$(this).css("opacity", "1")
			$(".content").css({
				'transform' : 'scale(0.9)',
				'transition': 'transform 2s'
			},1000)
		})


			$("#cut").click(function(){
				$("#loginformbackground").css("display","none")
			$(".loginform").css("display","none")
            window.location = "home.aspx"
			}
			)


		$("#loginclick, #loginclicks").click(function(){
			// alert()
			$("#loginformbackground").css("display","block")
			$(".loginform").css("display","block")
		})


		$("#login").click(function(){
			$("#logincontent").show()
			$("#signupcontent").hide()
			})
		$("#signup").click(function(){
			$("#signupcontent").show()
			$("#logincontent").hide()
			})

	})


