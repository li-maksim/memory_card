import '../styles/CardsBlock.css'
import { useState } from 'react'
import Card from './Card.jsx'

function CardsBlock({arr, countFn}) {

    const [pokemons, setPokemons] = useState(arr)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function handleCardClick() {
        const newArr = [...arr]
        shuffleArray(newArr)
        setPokemons(newArr)
    }

    const createCards = pokemons.map((item) => {
        return(
            <Card key={item} fn={handleCardClick} pokemon={item} countFn={countFn}></Card>
        )
    })

    return (
        <div className="cards_block">
            {createCards}
        </div>
    )
}

export default CardsBlock