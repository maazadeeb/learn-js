document.addEventListener("DOMContentLoaded", function() {
  let testButton = document.getElementById("testButton");

  testButton.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Button clicked");
  });

  document.body.addEventListener("click", function() {
    console.log("Body clicked!");
  });

  let newButton = document.createElement("button");
  newButton.setAttribute("class", "jsButton");
  newButton.textContent = "From JS";

  document.body.appendChild(newButton);
});
