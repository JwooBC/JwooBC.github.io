var main = document.querySelector("button");
main.addEventListener("click", function(event) {

var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 1; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events
event.stopPropagation();
  console.log("Cleared!");
});

addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});