import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CanvasGrid from './components/CanvasGrid'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CanvasGrid/>
  </StrictMode>,
)
