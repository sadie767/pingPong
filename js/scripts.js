//business inter-face

var pingPong = function(userInput) {
var numbsNping = [];
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
    var splice = numbsNping.splice(i-1, 1);
    var string = i.toString
    string = i;
    numbsNping.push(i);
  }
    $("#result").append("<li>" + string + "</li>")
}
}

//user inter-face

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = pingPong(userInput);
    $("#result").show (result);
  });
});
