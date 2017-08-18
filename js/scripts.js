
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = $("#result");
    var numbers = [];
    for (var i=1; i <= 10; i++) {
      numbers.push(i)
    }
    numbers.splice(0, userInput);
    result.show();
    result.append(numbers);
  });
});
