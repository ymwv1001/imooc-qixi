/*
	页面滑动
*/

function Swipe(container){

	var element = container.find(':first');

	var swipe = {};

	var slides = element.find('li');

	var _width = container.width();
	var _height = container.height();

	element.css({
		width:(slides.length * _width) + 'px',
		height:_height + 'px'
	});

	$.each(slides, function(index, val) {


		 /* iterate through array or object */
		 var slide = slides.eq(index);
		 slide.css({
		 	width:_width + 'px',
		 	height:_height + 'px'
		 });


	});

	swipe.scrollTo = function(x,speed){
		element.css({
				'transition-timing-function' : 'linear',
				'transition-duration': speed +'ms',
				'transform':'translate3d(-' + x + 'px,0px,0px)'
			});

	}

	return swipe;

}
