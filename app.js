//trayendo al elemento contenedor 
const container = $('#container');

//función para entrar a la respuesta de la petición 
function showPokemons(pokemon) {
  //console.log(pokemon);
  const allPokemons = pokemon.pokemon_entries;
  //console.log(allPokemons);
  paintPokemos(allPokemons)
};

function paintModalFeatures(json){
let captureRate = $('#capture-rate');
let habitat = $('#habitat');
let color = $('#color');
captureRate.text(json.capture_rate);
habitat.text(json.habitat.name);
color.text(json.color.name);
}
 
//función para pintar los pokemons en el DOM
function paintPokemos(pokemons){
  //console.log(pokemons)
  let template = " "
  pokemons.map((item,index) => {
if(index <= 19){
    const pokemonName = item.pokemon_species.name.toUpperCase();
    //console.log(pokemonName);
    const pokemonURL = item.pokemon_species.url;
    //console.log(pokemonURL);
    template += `<div class="col s12 m3">
   <div class="card">
     <div class="card-image">
       <img src="assets/img/683.png" class="pokebola">
     </div>
     <div class="card-content">
     <span class="card-title">${pokemonName}</span>
     <a class="waves-effect waves-light btn modal-trigger" href="#poke-modal">MORE FROM ${pokemonName} </a>
     </div>
     <div class="card-action">
       <a href="${pokemonURL}">Info Link</a>
     </div>
   </div>
 </div>`

$.ajax({
  url:pokemonURL
}).done(paintModalFeatures);
}
  }); container.append(template);
}



//primer petición a la API de pokemón
$.ajax({
  url:
    `https://pokeapi.co/api/v2/pokedex/1`
}).done(showPokemons);


//inicialización del componente modal de materialize
$(document).ready(function () {
  $('#poke-modal').modal();
});