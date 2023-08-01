import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CharacterForm from '../components/CharacterForm'

const UpdateCharacterPage = () => {
  const { characterId } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [health, setHealth] = useState(0)
  const [role, setRole] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchCharacter = async () => {
    const response = await fetch(`http://localhost:5005/api/characters/${characterId}`)
    if (response.status === 200) {
      const character = await response.json()
      setName(character.name)
      setHealth(character.health)
      setRole(character.role)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  const handleSubmit = async payload => {
    try {
      const response = await fetch(`http://localhost:5005/api/characters/${characterId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (response.status === 200) {
        const updatedCharacter = await response.json()
        navigate(`/characters/${updatedCharacter._id}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h3>Edit Character</h3>
      {!isLoading && (
        <CharacterForm onSubmit={handleSubmit} defaultValues={{ name, health, role }} />
      )}
    </>
  )
}

export default UpdateCharacterPage
