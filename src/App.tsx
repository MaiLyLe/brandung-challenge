import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'routing'

import 'globalStyles/App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
