import '../styles/CardsBlock.css'
import { useState } from 'react'
import Card from './Card.jsx'

function CardsBlock({pokemons}) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(pokemons)

    const createCards = pokemons.map((item) => {
        return(
            <Card key={item} pokemon={item}></Card>
        )
    })

    return (
        <div className="cards_block">
            {createCards}
        </div>
    )
}

export default CardsBlock