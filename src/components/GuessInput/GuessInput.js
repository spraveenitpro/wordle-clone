import React, { useState } from 'react';

function GuessInput() {
    const [guess, setGuess] = useState("");
    const handleChange = (e) => {
        const value = (e.target.value).toUpperCase()
        setGuess(value)
        console.log(guess)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ guess })
        setGuess("")
    }
    return (
        <>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input id="guess-input" minLength="5" maxLength="5" type="text" value={guess} onChange={handleChange} />
            </form>
        </>
    )
}

export default GuessInput;
