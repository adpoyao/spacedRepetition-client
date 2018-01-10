'use strict';

const wordBank = [
  'yesterday', 'future', 'perfect', 'moment', 'practice', 'method', 'hand-written letter', 'sun', 
  'rain', 'skirt', 'seasons', 'to avoid', 'favoite', 'exercise', 'coffee'];

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
