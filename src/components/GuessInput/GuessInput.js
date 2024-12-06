import React, { useState } from 'react';

function GuessInput({ onAddGuess }) {
    const [guess, setGuess] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        onAddGuess(guess)
        console.log({ guess })
        setGuess("")
    }
    return (
        <>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input id="guess-input" minLength="5" maxLength="5" type="text" value={guess} onChange={(e) => setGuess((e.target.value).toUpperCase())} />
            </form>
        </>
    )
}

export default GuessInput;
