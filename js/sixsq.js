
$(document).ready(function(){
	$('#slider1').bxSlider({
		auto: true,
		speed: 700,
		prevImage: 'img/design/prev.png',
		nextImage: 'img/design/next.png',
	});
	
	Cufon.replace('#slider1 h1, .products h2, .customers h3', {fontFamily: 'bebas'});
	Cufon.replace('#slider1 h3', {fontFamily: 'helveticaneue'});
});