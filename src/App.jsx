import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AllCharactersPage from './pages/AllCharactersPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'
import NewCharacterPage from './pages/NewCharacterPage'
import UpdateCharacterPage from './pages/UpdateCharacterPage'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/characters'>All characters</Link>
          </li>
          <li>
            <Link to='/characters/new'>New Character</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/characters' element={<AllCharactersPage />} />
        <Route path='/characters/:characterId' element={<CharacterDetailsPage />} />
        <Route path='/characters/new' element={<NewCharacterPage />} />
        <Route path='/characters/:characterId/update' element={<UpdateCharacterPage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
