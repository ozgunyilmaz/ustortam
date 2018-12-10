// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
//load countries
    $ajaxUtils
          .sendGetRequest("data/countries.json", 
            function (res) {
              //console.log(res);

              var array=Object.keys(res);

              var select = document.querySelector("#country");
              //console.log(array);
              for (var i=0; i < array.length; i++)
              {
                //console.log(array[i]);
                var option = document.createElement("option");
                option.innerHTML = array[i];
                select.appendChild(option);
              }

              
            });






    // Unobtrusive event binding
    document.querySelector("#country")
      .addEventListener("change", function(evt) {
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/countries.json", 
            function (res) {
              console.log(res);
              console.log(evt.srcElement);
              var combo=evt.srcElement;
              console.log(combo.options[combo.selectedIndex].text);

              var cities=res[combo.options[combo.selectedIndex].text];
              //console.log(cities);


              var select = document.querySelector("#city");
              removeOptions(select);

              for (var i=0; i < cities.length; i++)
              {
                var option = document.createElement("option");
                option.id = i;
                option.innerHTML = cities[i];
                select.appendChild(option);
              }
              
            });
      });
  }
);


function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}



