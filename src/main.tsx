import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/GlobalStyles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='w-full h-full'>
      <App />
    </div>
  </React.StrictMode>,
)
