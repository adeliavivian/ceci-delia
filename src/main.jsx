import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Site from './components/Site.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Site />
  </StrictMode>,
)
