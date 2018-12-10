var c=1;

// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      
      var textbox = document.querySelectorAll("input");
        console.log(textbox);
        for (var i=0;i<textbox.length;i++){
          if (textbox[i].type==="text"){

            textbox[i].style.backgroundColor="blue";
          }
        }




        var but = document.querySelectorAll("button");
        console.log(but);
        for (var i=0;i<but.length;i++){
          but[i].textContent=but[i].textContent.toUpperCase();
        }


        var p=document.querySelector("p");
        var btn = document.createElement("BUTTON");        // Create a <button> element
        var t = document.createTextNode("CLICK ME"+ c);       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        p.appendChild(btn);                    // Append <button> to <body>
        
        c++;
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

    document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




