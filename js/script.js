function toggler() {
		$('[data-toggler]').on('click', function(e) {
    	e.preventDefault();
    	var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash) return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('active');
    })
}

toggler();

// ThumbnailGridExpandingPreview

$(function() {
  Grid.init();
});

jQuery(document).ready(function( $ ) {
		$('.counter').counterUp({
				delay: 10,
				time: 1000
		});
});

//circle
function circleInit(){
  $('.circle').circleProgress({
    size: 142,
    fill: "#ffe600",
    startAngle: -Math.PI / 6 * 9,
    emptyFill: "#fff"
  });

  $('.circle1').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
  });
  $('.circle2').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(96 * progress) + '<i>%</i>');
  });
  $('.circle3').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
  });
  $('.circle4').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(94 * progress) + '<i>%</i>');
  });
};

$(window).on('scroll', function() {
  if(isScrolledIntoView('.circle')){
    circleInit();
    $(window).off('scroll');
  }
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};
