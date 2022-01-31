 $(document).ready(function(){
	 	// alert()
	 	$("#menu").hide();
	 	$("#img1").hide();
	 	
	 	$("#img2").click(function(){
	 		
	 		//alert()
	 		$(this).css({
	 			"margin-left":"-100px"
	 			// "z-index":"10"
	 			
	 		})

	 		$("#menu").slideDown(500)
	 		$("#text").css({
	 				"background":"#999",
	 				"color":"black",
	 				// "z-index":"20"
	 			})
	 		$("#img1").css({
	 			"display":"block",
	 			// "top":"2",
	 			"position":"fixed"
	 		})
	 		
	 	})


	 	$("#img1").click(function(){
	 		
	 		//alert()
	 		$("#img2").css({
	 			"margin-left":"1px"
	 			// "top":"0",
	 			 // "position":"fixed"
	 			
	 		})
	 			$("#menu").slideUp(500)
	 			$("#text").css({
	 				"background":"#78c",
	 				"color":"white"
	 			})
	 		$("#img1").css({
	 			"display":"none",
	 			// "top":"0",
	 			// "position":"fixed"
	 		})
	 		
	 	})

	 })
