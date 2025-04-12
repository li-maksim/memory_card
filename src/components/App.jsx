import { useState } from 'react'
import '../styles/App.css'
import Card from './Card.jsx'
import CardsBlock from './CardsBlock.jsx'

function App() {

  const pokemonsArr = ['bulbasaur', 'charmander', 'squirtle']

  return (
    <>
      <CardsBlock pokemons={pokemonsArr}></CardsBlock>
    </>
  )
}

export default App
