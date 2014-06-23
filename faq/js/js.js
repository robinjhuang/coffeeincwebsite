
    $(".question").click(function(argument) {  

    var temp = $(this).parent().find(".question");

    if (temp.hasClass("blank")) {
    	temp.removeClass("blank").addClass("color");
    } else {
    	temp.removeClass("color").addClass("blank");
    }
    
    
	    	
  
    	


    var el = $(this).parent().find(".answer");
    if (el.hasClass("display")) {
       el.removeClass("display").addClass("hideinit");
    } else {
        el.removeClass("hideinit").addClass("display");
    }
});