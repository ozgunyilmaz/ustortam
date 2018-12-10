// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/data.json", 
            function (res) {
              console.log(res);

              var array=res.data;
              console.log(array);
              var message="<tr>";
              var col=array[0].length;
              var row=array.length;

              for (var i=0;i<col;i++){
                message=message+"<th>"+array[0][i]+"</th>";
              }
              message=message+"</tr>";

              for (var i=1;i<row;i++){
                message=message+"<tr>";
                for (var j=0;j<col;j++){
                  message=message+"<td>"+array[i][j]+"</td>";
                }
                message=message+"</tr>";
              }
console.log(message);
              document.querySelector("#salary")
                .innerHTML = message;
            });
      });
  }
);





