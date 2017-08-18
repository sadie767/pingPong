
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = $("#result");
    var numbers = [];
    for (var i=1; i <= 10; i++) {
      numbers.push(i)
    }
    numbers.forEach(function(three) {
      if (three % 3 === 0) {
        three = "ping";
      }
      return three;
    })
    numbers.forEach(function(five) {
      if (five % 5 === 0) {
        five = "pong";
      }
      return five;
    })
    numbers.forEach(function(both) {
      if (both % 3 === 0 && both % 5 === 0) {
        both = "ping-pong";
      }
      return both;
    })
    var sliced = numbers.slice(0, userInput);
    result.show();
    result.append(sliced);
  });
});
