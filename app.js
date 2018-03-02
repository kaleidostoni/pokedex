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
 template += ``

});
}



    $.ajax({
        url:
            `https://pokeapi.co/api/v2/pokedex/1`
    }).done(showPokemons);

