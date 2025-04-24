function Scoreboard({score, bestScore}) {


    return (
        <div className="scoreboard">
            <h1>Memory card game</h1>
            <p>Current score: {score}</p>
            <p>Best score: {bestScore}</p>
        </div>
    )
}

export default Scoreboard