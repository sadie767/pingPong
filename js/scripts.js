$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    alert(userInput);
    $("#result").show(userInput);
  });
});
