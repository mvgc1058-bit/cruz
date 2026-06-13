import { useState } from "react"

import SearchBar from "../components/SearchBar"
import PokemonFilter from "../components/pokemonfilter"
import CharacterList from "../components/CharacterList"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

import useCharacters from "../hooks/useCharacters"

function Home() {

    const {
        characters,
        loading,
        error
    } = useCharacters()

    const [search, setSearch] = useState("")
    const [selectedType, setSelectedType] = useState("")

    const filteredCharacters = characters.filter(character => {

        const matchesSearch = character.name
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchesType =
            selectedType === "" ||
            character.types?.some(
                type => type.type.name === selectedType
            )

        return matchesSearch && matchesType
    })

    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        )
    }

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <PokemonFilter
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            <CharacterList
                characters={filteredCharacters}
            />
        </>
    )
}

export default Home