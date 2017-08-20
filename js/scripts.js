
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var numbers = [];
    for (var i=1; i <= 100; i++) {
      numbers.push(i);
      if ((i % 3 === 0) && (i % 5 === 0)) {
        var splice = numbers.splice(i-1, 1);
        var string = i.toString
        string = "pingpong";
        numbers.push(string);
      } else if (i % 3 === 0) {
        var splice = numbers.splice(i-1, 1);
        var string = i.toString();
        string = "ping";
        numbers.push(string);
      } else if (i % 5 === 0) {
        var splice = numbers.splice(i-1, 1);
        var string = i.toString
        string = "pong";
        numbers.push(string);
          }
          else if ((i % 3 === 0) && (i % 5 === 0)) {
            var splice = numbers.splice(i-1, 1);
            var string = i.toString
            string = "pingpong";
            numbers.push(string);
              }
        var numberSliced = numbers.slice(0, userInput);
        var result = $("#result");
        $("#result").append("<li>" + i + "</li>");
        }
    result.show(numberSliced);
    result.append(numberSliced);
  });
});
