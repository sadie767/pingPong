
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var numbsNping = [];
    var result = $("#result");
    for (var i=1; i <= userInput; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        var splice = numbsNping.splice(i-1, 1)
        var string = i.toString();
        string = "pingpong";
        numbsNping.push(string);
      } else if (i % 3 === 0) {
        var splice = numbsNping.splice(i-1, 1);
        var string = i.toString();
        var string = "ping";
        numbsNping.push(string);
      } else if (i % 5 === 0) {
        var splice = numbsNping.splice(i-1, 1);
        var string = i.toString
        var string = "pong";
        numbsNping.push(string);
      }
      else {
        numbsNping.push(i);
      }
        $("#result").append("<li>" + numbsNping + "</li>")
    }
    result.show(numbsNping);
  });
});
