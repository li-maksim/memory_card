import { useState } from 'react'
import '../styles/App.css'
import Card from './Card.jsx'
import CardsBlock from './CardsBlock.jsx'
import Scoreboard from './Scoreboard.jsx'

function App() {

  const pokemonsArr = []
  let i = 1
  while (i <= 12) {
    pokemonsArr.push(i)
    i++
  }
  const [clicked, setClicked] = useState([])
  const [bestScore, setBestScore] = useState(0)

  function countScore(e) {
    let name = e.target.dataset.name
    if (!clicked.includes(name)) {
      setClicked([...clicked, name])
      console.log(clicked.length)
      console.log(pokemonsArr.length)
      if (clicked.length === pokemonsArr.length - 1) {
        alert('You won!')
        setBestScore(pokemonsArr.length)
        setClicked([])
      }
    } else {
      if (clicked.length > bestScore) {
        setBestScore(clicked.length)
      }
      setClicked([])
    }
  }


  return (
    <>
      <Scoreboard score={clicked.length} bestScore={bestScore}></Scoreboard>
      <CardsBlock arr={pokemonsArr} countFn={countScore}></CardsBlock>
    </>
  )
}

export default App
