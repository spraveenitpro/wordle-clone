import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [allGuesses, setAllGuesses] = useState([])

    const addGuess = (guess) => {
        setAllGuesses([...allGuesses, guess])
    }
    return (
        <>
            <Guesses value={allGuesses} />
            <GuessInput onAddGuess={addGuess} />
        </>
    );
}

export default Game;
