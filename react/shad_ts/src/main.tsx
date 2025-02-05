import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import data from "../data.json"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App projects={data.data}/>
  </StrictMode>,
)
