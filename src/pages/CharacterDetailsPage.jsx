import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const CharacterDetailsPage = () => {
  /* Get back the characterId */
  const { characterId } = useParams() // { characterId: "64c8f8ddbfc1dfd6f0470423" }
  /* Store our character */
  const [character, setCharacter] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  /* Fetch our character */
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`http://localhost:5005/api/characters/${characterId}`)
      if (response.status === 200) {
        const parsed = await response.json()
        setCharacter(parsed)
        setIsLoading(false)
        console.log(character)
      }
    }
    fetchCharacter()
  }, [characterId])

  useEffect(() => {
    console.log(character)
  }, [character])

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/characters/${characterId}`, {
        method: 'DELETE',
      })
      if (response.status === 202) {
        navigate('/characters')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : character ? (
    <>
      <h1>Details</h1>
      {/* Display our character */}
      <p>{character.name}</p>
      <p>{character.role}</p>
      <p>{character.health}</p>
      <button onClick={() => navigate(`/characters/${characterId}/update`)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <hr />
      <h2>Some examples on fetching a different character</h2>
      <Link
        to={`/characters/${
          characterId === '64c8f8ddbfc1dfd6f0470423'
            ? '64c909345e6461c6ab16e541'
            : '64c8f8ddbfc1dfd6f0470423'
        }`}
      >
        {character.name === 'Eric' ? 'Josh' : 'Eric'}
      </Link>
    </>
  ) : (
    <h1>There was an error</h1>
  )
}

export default CharacterDetailsPage
