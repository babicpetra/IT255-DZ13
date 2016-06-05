
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    
$("#second").hide();
    $("#registerhere").click(function() {
$("#first").slideUp("slow", function() {
$("#second").slideDown("slow");
});
});
// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#loginhere").click(function() {
$("#second").slideUp("slow", function() {
$("#first").slideDown("slow");
});
});
    $.backstretch("assets/img/backgrounds/hotel.jpg");
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
   
    
});
