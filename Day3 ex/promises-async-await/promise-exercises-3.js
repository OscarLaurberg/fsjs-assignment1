const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/";
var now = require("performance-now")


 
function fetchPerson(url){
  return fetch(url)
  .then((res) => res.json())
  .then((data) => data);
}

async function printNames() {
  let start = now();
  console.log("Before");
  const person1 = await fetchPerson(URL+'1');
  const person2 = await fetchPerson(URL+'2');
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
  return start;
}

async function getDataParallel(){
  let start = now();
  const p1 = fetchPerson(URL+'1');
  const p2 = fetchPerson(URL+'2');
  const persons = await Promise.all([p1,p2]);
  return start;
}


printNames().then((start) => {
  let stop = now();
  console.log((start-stop).toFixed(3));
})

getDataParallel().then((start) => {
  let stop = now();
  console.log((start-stop).toFixed(3))
})
