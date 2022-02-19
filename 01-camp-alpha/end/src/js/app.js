import { addTile, gameOver, gameWon } from './tiles';
import { getWord, isInDictionary } from './words';

// Grab the input box to get the word that the user types
let inputEl = document.querySelector('input');

// Get a new word when the page is refreshed
let word = getWord();

// Set a total number of chances as 6
let totalChances = 6;

// If you want to cheat, then uncomment the next statement
// console.log(word);

// We want to get in action when the user presses and releases a key on the keyboard so we keep monitoring our input box
inputEl.addEventListener('keyup', (event) => {
  let keyPressed = event.key;
  console.log('you pressed:'+ keyPressed);
  let guess = event.target.value.toLowerCase();
  console.log('you guessed:'+ guess);

  // If the user pressed 'Enter' AND if the typed word is 5 characters AND if we still have chances left
  if (keyPressed === 'Enter' && guess.length === 5 && totalChances > 0) {
    // If the word is the same as the target word
    // Then the game is won!
    if (word === guess) {
      gameWon(word);
      // Empty out the input box
      event.target.value = '';
      return;
    }

    // If the word is in the dictionary, then
    if (guess) {
      // Loop through the 5 characters of the word
      for (let x = 0; x < 5; x++) {
        // If the user's character is in the same position
        // as in the chosen word, then mark it green
        if (word[x] === guess[x]) {
          addTile(guess[x], 'green');
        }
        // if the position is not same but the character exists in the chosen word, mark it as orange
        else if (word.includes(guess[x])) {
          addTile(guess[x], 'orange');
        }
        // if the character does not exist, mark it grey
        else {
          addTile(guess[x], 'grey');
        }
      }

      // With every chance, subtract 1 from the total number of available chances until you run out
      totalChances = totalChances - 1;
      displayChances(totalChances);
    }

    // Empty out the input box
    event.target.value = '';
  }

  // If total chances are 0 or in negative, then end the game!
  if (totalChances <= 0) {
    // If the user is out of chances, its game over!
    gameOver();
    displayChances(totalChances);
    return;
  } else {
    displayChances(totalChances);
  }
});

let displayChances = (totalChances) => {
  document.getElementById('chances').innerHTML = `Chances: ${totalChances}`
}
