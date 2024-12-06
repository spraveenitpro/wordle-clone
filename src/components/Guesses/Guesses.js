import React from 'react';

function Guesses({ value }) {
    console.log(value)
    return (
        <>
            <div className="guess-results">
                {value.map((guess, index) => (
                    <p key={index} className="guess">{guess}</p>
                ))}
            </div>
        </>
    )
}

export default Guesses;
