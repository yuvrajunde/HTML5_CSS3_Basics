$(document).ready(function(){
    // alert()
    $("p:not(:first)").hide()
    

    $("h2").click(function(){
        $("p").slideUp()
        $(this).next().slideDown()
    })
    
})