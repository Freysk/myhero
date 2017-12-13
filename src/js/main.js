// PLUGIN
$(document).ready(function() {
  addLink();
  editColor();
  editFilter();
  if ( fx === "hue" || fx === "color" ) {
    addFx();
    console.log('hello');
  }
  //addBlur();
});

// GLOBALE VARIABLE
var $myhero = $('.myhero-element');
var $filter = $('.myhero-filter');
var fx = $filter.data('fx');

// FUNCTIONS
function addLink () {
  var link = $myhero.data('url');
  $myhero.css('background-image', 'url(' + link + ')' );
}
function editFilter () {
  var opacity = $filter.data('opacity');
  $filter.css( 'opacity', opacity );
}
function addFx () {
  $filter.css( 'mix-blend-mode', fx );
  console.log(fx);
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
