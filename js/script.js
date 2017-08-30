// ThumbnailGridExpandingPreview

$(function() {
  Grid.init();
});

// circle-portfolio
function circlePortfolioInit(){
  $('.circle-portfolio').circleProgress({
  });

  $('.circle-clients').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(1600 * progress));
  });
  $('.circle-project').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(3200 * progress));
  });
  $('.circle-avards').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(40 * progress));
  });
  $('.circle-coffee').circleProgress({}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(20000 * progress));
  });
};

$(window).on('scroll', function() {
  if(isScrolledIntoView('.circle-portfolio')){
    circlePortfolioInit();
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
