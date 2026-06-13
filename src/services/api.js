const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

export async function getCharacters() {

    try {

        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(
                "No se pudieron obtener los Pokémon"
            );
        }

        const data = await response.json();

        const pokemons = await Promise.all(

            data.results.map(async (pokemon) => {

                const pokemonResponse = await fetch(
                    pokemon.url
                );

                if (!pokemonResponse.ok) {
                    throw new Error(
                        `No se pudo obtener la información de ${pokemon.name}`
                    );
                }

                const pokemonData =
                    await pokemonResponse.json();

                return {
                    id: pokemonData.id,

                    name: pokemonData.name,

                    image: pokemonData.sprites.front_default,

                    species: "Pokémon",

                    types: pokemonData.types,

                    stats: pokemonData.stats,

                    height: pokemonData.height,

                    weight: pokemonData.weight
                };

            })

        );

        return pokemons;

    } catch (error) {

        console.error(error);

        throw new Error(
            "Error al conectar con la API"
        );

    }

}