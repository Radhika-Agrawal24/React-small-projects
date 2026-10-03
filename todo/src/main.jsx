import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './apps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)
