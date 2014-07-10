// JavaScript Document

jQuery(document).ready(function() {
  jQuery(".toggle_list").hide();
  //toggle the componenet with class msg_body
  jQuery(".centers_toggle_heading").click(function()
  {
    jQuery(this).next(".toggle_list").slideToggle(500);
  });
});

//Hide [-] on load
$(document).ready(function() {
   $(".collapse").hide();
 });
 
//Toggle heading show [-]

$(document).ready(function(){
  $(".centers_toggle_heading").click(function(){
    $(".expand", this).toggle();
  });
});


$(document).ready(function(){
  $(".centers_toggle_heading").click(function(){
    $(".collapse", this).toggle();
  });
});

//Expand/Collapse All
$(document).ready(function(){
$(".expand_collapse").click(function(){
	$(".toggle_list").show();
	$(".expand", ".centers_toggle_heading").hide();
	$(".collapse", ".centers_toggle_heading").show();
	$(this).hide();
	$(".expanded").show();
  });
  });
  
$(document).ready(function(){
$(".expanded").click(function(){
    $(".toggle_list").hide();
	$(".expand", ".centers_toggle_heading").show();
	$(".collapse", ".centers_toggle_heading").hide();
	$(this).hide();
	$(".expand_collapse").show();
  });
  });
