import { useState } from 'react'
import '../styles/App.css'
import Card from './Card.jsx'
import CardsBlock from './CardsBlock.jsx'

function App() {

  const [pokemonsArr, setPokemonsArr] = useState(['bulbasaur', 'charmander', 'squirtle'])
  const [clicked, setClicked] = useState([])

  function countScore(e) {
    let name = e.target.dataset.name
    if (!clicked.includes(name)) {
      setClicked([...clicked, name])
      console.log(clicked)
    } else {
      console.log('busted')
      setClicked([])
    }
  }

  return (
    <>
      <h1>{clicked.length}</h1>
      <CardsBlock arr={pokemonsArr} countFn={countScore}></CardsBlock>
    </>
  )
}

export default App
