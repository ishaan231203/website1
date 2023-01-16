$(document).ready(function() {
	
	$(".about-section").waypoint(fuction(direction) {
		if (direction=='down') {
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	});
});