import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BusinessCard from "./Components/BusinessCard"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <BusinessCard />
    </div>
  </React.StrictMode>
)
