import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './assets/Components/Header'
import RestaurantBody from "./assets/Components/RestaurantBody"

function App() {
  return (
    <Container>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <RestaurantBody></RestaurantBody>
      </div>
    </Container>
  )
}

export default App
