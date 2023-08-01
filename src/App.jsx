import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllCharactersPage from './pages/AllCharactersPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/characters' element={<AllCharactersPage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
