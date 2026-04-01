import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PHome from './pages/PHome/PHome'
import PPessoa from './pages/PPessoas/PPessoas'
import PLogin from './pages/PLogin/PLogin'
import ProtectedRoute from './components/Rotas/ProtectedRoutes';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PHome/>}/>
          <Route path='/pessoas' element={<PPessoa/>}/>
          <Route path='/login' element={<PLogin/>}/>
          <Route path='/pessoas' element={<ProtectedRoute element={PPessoa} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
