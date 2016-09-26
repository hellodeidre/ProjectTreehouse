//Problem: no user interaction causes no change to application
//Solution: When user interacts causes changes appropriately

//When clicking on control list items
  //Deselect sibling elements
  //Select clicked elements
  //cache clicked color

//When new color is pressed
  //Show color select menu or hide select menu

//When color sliders changes
  //Update the new color span

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


$(".controls").on("click", "li", function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
});

$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

// context.beginPath();
// context.moveTo(10, 10);
// context.lineTo(20, 10);
// context.lineTo(20, 20);
// context.lineTo(10, 20);
// context.closePath();
// context.stroke();
