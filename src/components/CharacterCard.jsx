import { Link } from "react-router-dom";
import "../styles/cards.css";

function CharacterCard({ character }) {

    return (

        <div className="card">

            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${character.id}.gif`}
                alt={character.name}
            />

            <h3>
                {character.name.charAt(0).toUpperCase() +
                    character.name.slice(1)}
            </h3>

            <p>{character.species}</p>

            <Link to={`/detail/${character.id}`}>
                Ver más
            </Link>

        </div>

    );

}

export default CharacterCard;