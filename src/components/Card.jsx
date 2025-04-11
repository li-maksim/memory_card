import { useState } from "react"
import { useEffect } from "react"
import '../styles/Card.css'

function Card({pokemon}) {

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
        <div className="card">
            <img src={data.sprite} alt={data.name} className="sprite"/>
            <p className="name">{data.name}</p>
        </div>
    )
}

export default Card