$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: false,
		autoPlay: false,
		prevNextButtons: true,
        arrowShape: { 
            x0: 15,
            x1: 65, y1: 50,
            x2: 75, y2: 40,
            x3: 35
        }

	});
    
    $('.flickity--slider--bar').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: false,
		pageDots: true,
		autoPlay: false,
		prevNextButtons: false,
	});
});