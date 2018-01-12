'use strict';

const wordBank = [
	'yesterday', 'future', 'perfect', 'moment', 'practice', 'method', 'hand-written letter', 'sun', 
	'rain', 'skirt', 'seasons', 'to avoid', 'favorite', 'exercise', 'coffee', 'chicken', 'monkey', 'grape',
	'white', 'lemon', 'green', 'fire', 'simple', 'ghost', 'worm', 'to love', 'winter', 'brunch', 'mimosa',
	'drunk', 'spicy', 'fragrant', 'cat food', 'nub', 'scared', 'liver', 'gruel'];

function randomNoRepeats(array) {
	var copy = array.slice(0);
	return function() {
		if (copy.length < 1) { copy = array.slice(0); }
		var index = Math.floor(Math.random() * copy.length);
		var item = copy[index];
		copy.splice(index, 1);
		return item;
	};
}

export const randomChooser = randomNoRepeats(wordBank);
