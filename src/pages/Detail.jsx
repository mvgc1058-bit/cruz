import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadPokemon() {

            try {

                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );

                if (!response.ok) {
                    throw new Error(
                        "No se pudo obtener el Pokémon"
                    );
                }

                const data = await response.json();

                setPokemon(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }

        loadPokemon();

    }, [id]);

    if (loading) {

        return <h2>Cargando Pokémon...</h2>;

    }

    if (!pokemon) {

        return <h2>No se encontró el Pokémon.</h2>;

    }

    return (

        <div className="detail-container">

            <img
                className="detail-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`}
                alt={pokemon.name}
            />

            <h1>

                {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1)}

            </h1>

            <div className="stats">

                {pokemon.stats.map((stat) => (

                    <div
                        key={stat.stat.name}
                        className="stat"
                    >

                        <span>

                            {stat.stat.name.toUpperCase()}

                        </span>

                        <div className="bar">

                            <div
                                className="fill"
                                style={{
                                    width: `${Math.min(
                                        stat.base_stat,
                                        100
                                    )}%`
                                }}
                            >

                                {stat.base_stat}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <p>

                <strong>Altura:</strong>

                {" "}

                {pokemon.height / 10} m

            </p>

            <p>

                <strong>Peso:</strong>

                {" "}

                {pokemon.weight / 10} kg

            </p>

            <Link
                className="back-button"
                to="/"
            >

                ← Volver

            </Link>

        </div>

    );

}

export default Detail;