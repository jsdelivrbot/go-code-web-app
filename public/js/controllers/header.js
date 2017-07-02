app.controller("HeaderCtrl", function($scope) {
	$('.header-link').on('click', function() {
		$('#links').collapse('toggle');
	});
});
