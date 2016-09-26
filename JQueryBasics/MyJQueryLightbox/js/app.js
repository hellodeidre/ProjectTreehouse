//Problem: User clicks on image and goes to a dead end
//Solution: Create an overlay with a larger image - Lightbox

//1. Capture a click event on a link to an image.
  //1.1 Show the overlay.
  //1.2 Update overlay with the linked image
  //1.3 Get child's alt attribute and set caption
// 2. Add overlay
  //2.1 An image
  //2.2 A caption
//3. When overlay is clicked, hide the overlay

//Variables
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Additions to/adding overlay
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//Click events
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //console.log(href);
  $image.attr("src", imageLocation);

  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});

$overlay.click(function(){
  $overlay.hide();
});
