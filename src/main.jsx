import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/index.jsx'
import Login from './pages/login/index.jsx'

// pega a tag div pelo id 'root'
// cria elementos/paginas dentro da div com id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>
)

// celulas -> unidade pequenas 
// orgao -> juncao de varias celulas


