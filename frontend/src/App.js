import React from "react"
import "./App.css"
import { Container } from "react-bootstrap"

import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h2>Hello World</h2>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
