import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Laptops from './components/Laptops.jsx'
import Mobiles from './components/Mobiles.jsx'
import Headphones from './components/Headphones.jsx'
import Master from './components/Master.jsx'

createRoot(document.getElementById('root')).render(
  <Master></Master>
)
