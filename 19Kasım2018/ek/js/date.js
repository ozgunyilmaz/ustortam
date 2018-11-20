console.log(Date());

console.log(new Date().toLocaleString());

console.log(new Date().toLocaleString('en-US'));

//////////////////////////////////////////////////////////////////////////
var currentDate = new Date(),
      month = currentDate.getMonth() + 1,
      day = currentDate.getDate(),
      year = currentDate.getFullYear(),
      date = day + "/" + month + "/" + year;


console.log(date);


////////////////////////////////////////////////////////////////////////
var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();
  
  // Add a leading zero if needed
  if (minutes < 10) {
    minutes  = "0" + minutes; 
  }
  
  // Join the parts
  time = hours + ":" + minutes;
      
  // Output the result to the above HTML element
 console.log(time);

 ///////////////////////////////////////////////////////////////////////

var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);


//Calculating elapsed time///////////////////////////////////////////////////////////////////////
// using Date objects
var start = Date.now();

// the event to time goes here:
j=0;
for (var i=0;i<1000000;i++){
  j=j+1;
}
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds

console.log(elapsed);
