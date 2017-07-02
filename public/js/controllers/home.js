app.controller('HomeCtrl', function($scope) {
	for (var i = 1; i < slidesAmount + 1; i += 1) {
		if (i == 1) {
			$('.carousel-indicators').html('<li data-target="#home-carousel" data-slide-to="0" class="active"></li>');
			$('.carousel-inner').html('<div class="item active" id="home-item-' + i + '"></div>');
		} else {
			$('.carousel-indicators').html($('.carousel-indicators').html() +
			'<li data-target="#home-carousel" data-slide-to="' + (i - 1) + '"></li>');
			$('.carousel-inner').html($('.carousel-inner').html() + '<div class="item" id="home-item-' + i + '"></div>');
		}

		$('.item:nth-child(' + i + ')').css('background-image', 'url("../img/home-back-' + i + '.jpg")');
		$('.item:nth-child(' + i + ')').css('background-size', 'cover');

		$('#home-item-' + i).html($('#home-item-' + i).html() +
			'<div class="carousel-caption d-none d-md-block"><h3>' + imgHeaders[i - 1] + '</h3><p>' +
			imgCaptions[i - 1] + '</p></div>');
	}

	$('.carousel').carousel();
});

slidesAmount = 5;

imgHeaders = [
	'Slide 1',
	'Slide 2',
	'Slide 3',
	'Slide 4',
	'Slide 5'
];

imgCaptions = [
	'This is the caption for the first slide...',
	'This is the caption for the second slide...',
	'This is the caption for the third slide...',
	'This is the caption for the fourth slide...',
	'This is the caption for the fifth slide...'
];