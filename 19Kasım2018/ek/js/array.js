var citiesAU =  ["Sydney", "Melbourne", "Brisbane", "Perth"],
      citiesNZ =  ["Dunedin", "Christchurch", "Auckland", "Wellington"],
      citiesUS =  ["New York", "Miami", "San Fransisco", "Los Angeles"],
      cities = citiesAU.concat(citiesNZ, citiesUS);
  
console.log(cities);

console.log(cities.join("-"));


//////////////////////////////////////////

cities =  ["Sydney", "Tokyo", "Miami", "Auckland"];
console.log(cities.join(", "));
cities.pop();
console.log("pop sonrası");
console.log(cities.join(", "));
cities.shift();
console.log("shift sonrası");
console.log(cities.join(", "));

cities.push( "London", "Cairns" );
console.log("push sonrası");
console.log(cities.join(", "));

cities.unshift( "Izmir", "Ankara" );
console.log("unshift sonrası");
console.log(cities.join(", "));

cities.sort();		//Artan
console.log("sort sonrası");
console.log(cities.join(", "));

cities.sort();
cities.reverse();	//Azalan
console.log("reverse sort sonrası");
console.log(cities.join(", "));

var newCities=cities.slice(2, 5);
console.log(newCities.join(", "));


var pos = cities.indexOf('Izmir');
console.log("pos: "+pos);

cities.splice(pos,2);
console.log(cities.join(", "));


//////////////////////////////////////////////////////////////
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(function(a, b){
var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;});
console.log(fruits.join(", "));

///////////////////////////////////////////////////////////////////////
var points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return b - a});

console.log(points.join(", "));
