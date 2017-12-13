// PLUGIN MYHERO
$(document).ready(function() {
  addLink();
  editColor();
  editFilter();
  addFx();
  addBlur();
  addGray();
  setFilters();
  changePosition();
});

// GLOBALE VARIABLES
var $myhero = $('.myhero-element');
var $filter = $('.myhero-filter');
var filter = "";

// FUNCTIONS
function addLink () {
  var link = $myhero.data('url');
  $myhero.css('background-image', 'url(' + link + ')' );
}
function editColor () {
  var color1 = $filter.data('color1');
  var color2 = $filter.data('color2');
  if( color2 ) {
    var direction = $filter.data('gradient-direction');
    $filter.css({ "background" : "linear-gradient( "+ direction +", " + color1 +", "+ color2+ " )" });
  } else {
    $filter.css( 'background-color', color1 );
  }
}
function editFilter () {
  var opacity = $filter.data('opacity');
  $filter.css( 'opacity', opacity );
}
function addFx () {
  var fx = $filter.data('fx');
  if ( fx === "hue" || fx === "color" ) {
    $filter.css( 'mix-blend-mode', fx );
  }
}
function addBlur () {
  var blur = $myhero.data('blur');
  filter += "blur("+ blur +"px) ";
}
function addGray () {
  var gray = $myhero.data('gray');
  console.log(gray);
  // $myhero.css({ "filter" : "grayscale("+ gray +"%)" });
  filter += "grayscale("+ gray +"%)";
}
function setFilters()
{
  $myhero.css({ "filter" : filter });
}
function changePosition () {
  var position = $myhero.data('position');
  console.log(position);
  switch (position) {
    case "TL":
      $myhero.css({ backgroundPosition : "top left" });
      break;
    case "TC":
      $myhero.css({ backgroundPosition : "top center" });
      break;
    case "TR":
      $myhero.css({ backgroundPosition : "top right" });
      break;
    case "CL":
      $myhero.css({ backgroundPosition : "center left" });
      break;
    case "CC":
      $myhero.css({ backgroundPosition : "center center" });
      break;
    case "CR":
      $myhero.css({ backgroundPosition : "center right" });
      break;
    case "BL":
      $myhero.css({ backgroundPosition : "bottom left" });
      break;
    case "BC":
      $myhero.css({ backgroundPosition : "bottom center" });
      break;
    case "BR":
      $myhero.css({ backgroundPosition : "bottom right" });
      break;
  }
}
