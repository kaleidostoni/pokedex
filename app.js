const container = $('#container');

function showPokemons(pokemon){
//console.log(pokemon);
const allPokemons = pokemon.pokemon_entries;
//console.log(allPokemons);
let template = " "
allPokemons.forEach(item =>{
    const pokemonName = item.pokemon_species.name;
     console.log(pokemonName);
    const pokemonURL = item.pokemon_species.url;
    console.log(pokemonURL);
 template += `<div class="col s12 m3">
   <div class="card">
     <div class="card-image">
       <img src="assets/img/683.png" class="pokebola">
     </div>
     <div class="card-content">
     <span class="card-title">${pokemonName}</span>
     </div>
     <div class="card-action">
       <a href="${pokemonURL}">CLICK HERE TO KNOW MORE THIS POKEMON</a>
     </div>
   </div>
 </div>`

});container.append(template);
}



    $.ajax({
        url:
            `https://pokeapi.co/api/v2/pokedex/1`
    }).done(showPokemons);

