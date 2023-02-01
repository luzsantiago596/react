import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContadorApp from './components/ContadorApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorApp value={123}/>
  </React.StrictMode>,
)
