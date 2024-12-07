import React from 'react';
import Guess from '../Guess'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';

function Guesses({ value }) {
	console.log(range(NUM_OF_GUESSES_ALLOWED))
	return (
		<>
			<div className="guess-results">


				{range(NUM_OF_GUESSES_ALLOWED).map((num) => (

					<Guess value={value[num]} key={num} />

				))}

			</div>
		</>
	)
}

export default Guesses;
