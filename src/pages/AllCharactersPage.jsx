import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllCharactersPage = () => {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await fetch('http://localhost:5005/api/characters')
    if (response.status === 200) {
      const parsed = await response.json()
      setCharacters(parsed)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <>
      <h1>All characters</h1>
      {characters.map(character => (
        <Link to={`/characters/${character._id}`} key={character._id}>
          <p>{character.name}</p>
        </Link>
      ))}
    </>
  )
}

export default AllCharactersPage
