import { useState } from "react"
import { useEffect } from "react"
import '../styles/Card.css'

function Card({pokemon, fn}) {

    const [data, setData] = useState({name: '', sprite: ''})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                const result = await resp.json()

                setData({name: result.name, sprite: result.sprites.front_default})
            } catch (error) {
                console.log(`Error:${error}`)
            }
        }

        fetchData()
    }, [pokemon])

    return (
        <div className="card" onClick={fn}>
            <img src={data.sprite} alt={data.name} className="card_img"/>
            <p className="card_name">{data.name}</p>
        </div>
    )
}

export default Card