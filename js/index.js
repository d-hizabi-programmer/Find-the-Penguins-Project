$(document).ready(function () {
  //This code will run after your page loads
  var name = prompt("Enter your Name:");
  console.log("Name:", name);
  $("#firstH2").text("Welcome, " + name + "...");
  console.log("Value:" + name);
});
