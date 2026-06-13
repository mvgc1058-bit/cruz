function PokemonFilter({
    selectedType,
    setSelectedType
}) {
    return (
        <div className="filter-container">
            <select
                value={selectedType}
                onChange={(e) =>
                    setSelectedType(e.target.value)
                }
            >
                <option value="">Todos los tipos</option>
                <option value="grass">🌿 Planta</option>
                <option value="fire">🔥 Fuego</option>
                <option value="water">💧 Agua</option>
                <option value="electric">⚡ Eléctrico</option>
                <option value="bug">🐛 Bicho</option>
                <option value="normal">⚪ Normal</option>
                <option value="poison">☠️ Veneno</option>
                <option value="ground">🟤 Tierra</option>
                <option value="fairy">🧚 Hada</option>
                <option value="fighting">🥊 Lucha</option>
                <option value="psychic">🔮 Psíquico</option>
                <option value="rock">🪨 Roca</option>
                <option value="ghost">👻 Fantasma</option>
                <option value="ice">❄️ Hielo</option>
                <option value="dragon">🐉 Dragón</option>
            </select>
        </div>
    );
}

export default PokemonFilter;