let cursorOffsetX = 12
let cursorOffsetY = 12

// Create a new image element
var $cursor = $('<img src="../assets/images/cursed.png">').css({
    'width': '40px',
    'position': 'absolute',
    'z-index': 9999, // set a high z-index to make sure it appears on top
    'pointer-events': 'none', // make sure the image doesn't interfere with mouse events
    '-webkit-transform': 'scaleX(-1)',
    'transform': 'scaleX(-1)' //flips image
})

// Attach the image to the document body
$('body').append($cursor)
// Set cursor image to cursor position
$cursor.css({
    'left': $cursor.pageX,
    'top': $cursor.pageY
})

// Hide the default cursor using CSS
$('html, body').css({
    'cursor': 'none'
})

// Update the position of the image element on mousemove
$(document).on('mousemove', function(e) {
    $cursor.css({
        'left': e.pageX - cursorOffsetX,
        'top': e.pageY - cursorOffsetY
    })
})

$(document).ready(function() {
    $("#btn-test").click(function() {
      console.log('clicked')
    })
  })