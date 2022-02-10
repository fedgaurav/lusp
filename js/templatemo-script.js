
$(document).ready(function(){

	
	$('.mobile-menu-icon').click(function(){
		$('.templatemo-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.templatemo-nav').show();
		} else {
			$('.templatemo-nav').hide();
		}
	});

  
  $('body').bind('touchstart', function() {});

});


