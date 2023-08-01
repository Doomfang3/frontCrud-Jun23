import { useNavigate } from 'react-router-dom'
import CharacterForm from '../components/CharacterForm'

const NewCharacterPage = () => {
  const navigate = useNavigate()

  const handleSubmit = async payload => {
    try {
      const response = await fetch('http://localhost:5005/api/characters/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 201) {
        const newCharacter = await response.json()
        navigate(`/characters/${newCharacter._id}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>New character</h1>
      <CharacterForm onSubmit={handleSubmit} />
    </>
  )
}

export default NewCharacterPage
