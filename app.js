function showPokemons(pokemon){
    console.log(pokemon);
}

$('#search-form').submit(function (e) {
    e.preventDefault;

    const input = $('#search-input');
    const inputValue = input.val();
    console.log($inputValue);

    $ajax({
        url:
            `https://pokeapi.co/docsv2/${inputValue}`
    }).done(showPokemons);
});

