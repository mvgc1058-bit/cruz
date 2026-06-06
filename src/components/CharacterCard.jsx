import { Link } from "react-router-dom";
import "../styles/cards.css";
function CharacterCard({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>

      <p>{character.species}</p>

      <Link to={`/detail/${character.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default CharacterCard;