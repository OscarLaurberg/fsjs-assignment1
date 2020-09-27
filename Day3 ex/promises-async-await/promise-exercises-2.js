const fetch = require("node-fetch");
const url = "https://swapi.dev/api/people/";



async function getPlanetForFirstSpeciesInFirstMovieForPersonAsync(id) {
  try{
    const person = await fetch(url+id).then(res => res.json());
    const movie = await fetch(person.films[0]).then(res => res.json());
    const species = await fetch(movie.species[0]).then(res=> res.json());
    const planet = await fetch(species.homeworld).then(res=> res.json());
    //console.log(`Name: ${person.name}\nFirst film: ${movie.title} \nFirst species: ${species.name} \nHomeworld for ${species.name}: ${planet.name}`);
  }catch(err){
    console.log(err)
}
}

async function printData(id) {
  const data = await getPlanetForFirstSpeciesInFirstMovieForPersonAsync(id);
  console.log(data);
}

printData(1);
