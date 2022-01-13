let word = "gruft";
let lives = 6;
let game_status = "";
let error_message = "";
function get_score(word, guess) {
  let score = [];
  word_obj = {};
  guess_obj = {};
  for (let w of word)
    if (!word_obj[w]) word_obj[w] = 1;
    else word_obj[w] = word_obj[w] + 1;
  for (let w of word)
    if (!guess_obj[w]) guess_obj[w] = 1;
    else guess_obj[w] = guess_obj[w] + 1;
  for (i = 0; i < 5; i++) {
    if (word[i] == guess[i]) {
      score.push(2);
    } else if (word.includes(guess[i])) {
      score.push(1);
    } else {
      score.push(0);
    }
  }
  return score;
}

function attempt(guess, word) {
  if (lives > 0) {
    // check for attempts not size 5
    if (guess.length !== 5) {
      document.getElementById("error_message").innerText =
        "Das gesuchte Wort besteht aus 5 Zeichen!";
      return;
    } else {
      document.getElementById("error_message").innerText = "";
    }

    // check if right solution
    if (guess === word) {
      document.getElementById("game_end").innerText = "You won the game";
      return;
    }
    game_status = game_status + get_score(word, guess) + "\n";
    document.getElementById("current_guess").innerText = game_status;
  }
}

function search(ele) {
  if (event.key === "Enter") {
    attemp(ele.value, word);
  }
}
