import { useState } from 'react'

const CharacterForm = ({ onSubmit, defaultValues /*  = { name: '', health: 0, role: '' } */ }) => {
  const [name, setName] = useState(defaultValues?.name || '')
  const [health, setHealth] = useState(defaultValues?.health || 0)
  const [role, setRole] = useState(defaultValues?.role || '')

  const handleSubmit = async event => {
    event.preventDefault()
    onSubmit({ name, health, role })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Health:
        <input value={health} onChange={event => setHealth(event.target.value)} />
      </label>
      <label>
        Role:
        <input value={role} onChange={event => setRole(event.target.value)} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default CharacterForm
