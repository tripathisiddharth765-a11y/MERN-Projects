async function fetchdata() {

    try {
        const name = document.getElementById('pokemonName').value.toLowerCase();
        const re = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!re.ok) {
            throw new Error("could not process");
        }
        const data = await re.json();
        console.log(data);
        const pokeImg = document.getElementById('pokemonImg');
        const pokemonSprite = data.sprites.front_default;
        pokeImg.src = pokemonSprite;
        pokeImg.style.display = "block";

    }
    catch (error) {
        console.error(error);
    }

}
