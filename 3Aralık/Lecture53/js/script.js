// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

//var x = document.getElementsByClassName("example");

function sayHello () {
  console.log(this);
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title =document.querySelector("#title").textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}


// Unobtrusive event binding
//  document.querySelector("button")
//      .addEventListener("click", sayHello);

//document.querySelector("button")
//    .onclick = sayHello;

