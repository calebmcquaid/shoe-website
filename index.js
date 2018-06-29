// var getCart = $("#output").text();
//
// var strNum = parseInt(getCart);
//
// var setCart = function() {
//   return strNum*1+1;
// };

var addToCart = function() {
  var numIs = $('span').text();

  var strNum = parseInt(numIs);

  var newNum = strNum + 1;

  $('span').text(newNum)
  $('#target').text("Added to Cart")
  setTimeout( function(){
  $('#target').text("Buy Now")
    }  , 1000 );
};

$('#target').click(addToCart);

var tabSwitch = function() {
    $('.productDetails').hide();
    $('.reviews').hide();
    $('.sizeFit').show();
}

$('.fit').click(tabSwitch);

var tabSwitchBack = function() {
    $('.sizeFit').hide();
    $('.reviews').hide();
    $('.productDetails').show();
}

$('.details').click(tabSwitchBack);

var tabReviews = function() {
    $('.sizeFit').hide();
    $('.productDetails').hide();
    $('.reviews').show();
}

$('#nav-reviews').click(tabReviews);
