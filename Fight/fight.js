$(document).ready(function() {
  $("img#tiger").on("click", function() {
    $(this).slideUp(5000);
  });
});
var fi = ["Gloves and Pads", "Bare knuckles"];
var fs = ["Homegrown", "Martial Art"];
var sk = ["Beginner", "Intermediate", "Advanced"];
var az = [fi[1], fs[0], sk[1]];
var ma = [fi[0], fs[1], sk[1]];
var za = [fi[0], fs[1], sk[1]];
var na = [fi[1], fs[0], sk[0]];
var da = [fi[1], fs[0], sk[1]];
$(document).ready(function() {
  $("li#Az").one("mouseover", function() {
    $(this).text($(this).text() + " : " + az);
    alert("Contact at mufcuw@gmail.com"); 
  });
});

