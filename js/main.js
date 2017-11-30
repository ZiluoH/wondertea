// smooth scroll navbar
$(document).ready(function(){
	// add scrollspy to <body>
	$('body').scrollspy({target:".navbar", offset:50});

	// add smooth scrolling on all links inside the navbar
	$('#navbarResponsive a').on('click', function(e){
		// make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// prevent default anchor click behavior
			e.preventDefault();

			// store hash
			var hash = this.hash;

			// use jQuery's animate() method to add smooth page scroll
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// add hash(#) to url when done scrolling(default click behavior)
				window.location.hash = hash;
			})
		}
		// end if
	})
})


// $('#navbarResponsive a')
