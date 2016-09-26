//Problem: It looks bad in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with better navigation

//Create a select and append to #menu
//Cycle over menu links
  //Create an option
  //Option's value is the href
  //Option's text is the text of links
  //Append option to selected
//Create button
//Bind click to button
  //to go the select's location
//Modify CSS to hide links on small width and show button and select
  //Also hide select and button on larger width and show links
//Deal with selected options depending on current page

var $select = $("<select></select>");
$("#menu").append($select);

$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");

if($anchor.parent().hasClass("selected")) {
  $option.prop("selected", true);
}

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append ($option);
});

//var $button = $("<button>Go</button>");
//$("#menu").append($button);
//$button.click...
$select.change(function(){
  window.location = $select.val();
});
