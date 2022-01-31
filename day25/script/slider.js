$(document).ready(function(){
	// alert()
	$('#filter').show()
	flag=0
		$('#sliderfilter').click(function(){

			if (flag==0)
             

			{

					$('#filter').css({
			 	"display":"block"
			 })
				

				$('#filter').animate({
				'margin-left':'10px',
				'opacity':'4'
			})
				flag=1
			}
			else
			{
				$('#filter').animate({
				'margin-left':'-500px',
				'opacity':'4'
				})
			$('#filter').css({
			 	"display":"block"
			 })
				flag=0
			}
		})
        
		
})