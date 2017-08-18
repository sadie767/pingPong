
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = $("#result");
    var numbers = [];
    var ping = "ping";
    for (var i=1; i <= 10; i++) {
      numbers.push(i)
    }
    numbers.forEach(function(three) {
      if (three % 3 === 0) {
        three = numbers.toString("ping");
      }
      return three;
    })
    var sliced = numbers.slice(0, userInput);
    result.show();
    result.append(sliced);
  });
});
