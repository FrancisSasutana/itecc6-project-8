import { Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacts';
function App() {

  return (
      <Routes>
        <Route path='/' element={<Contacts />}>
        </Route>
        
      </Routes>
  )
}

export default App
