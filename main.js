document.addEventListener("DOMContentLoaded", () => {
  let word = "gruft";
  let lives = 6;
  let game_status = "";
  let error_message = "";
  let current_row = 0;
  let current_char = 0;
  document.addEventListener("keydown", processKey);

  function read_attempt(row) {
    let guess = "";
    for (let i = 0; i < 5; i++) {
      guess = guess + document.getElementById("box_" + row + "_" + i).innerHTML;
    }
    return guess;
  }

  function processKey(e) {
    console.log(e);
    let current_box_id = "box_" + current_row + "_" + current_char;
    let previous_box_id = "box_" + current_row + "_" + (current_char - 1);

    // check if enter is pressed
    if (e.key === "Enter") {
      let guess = read_attempt(current_row);
      console.log(guess);
      return;
    }

    // check if current row is full
    if (current_char > 5) {
      return;
    }
    // check for backspace
    if (e.key == "Backspace") {
      if (current_char > 0) {
        document.getElementById(previous_box_id).innerHTML = "";
        current_char--;
      }
      return;
    }
    if (e.key.match("^[a-zA-Z()]+$")) {
      document.getElementById(current_box_id).innerHTML = e.key.toUpperCase();

      current_char++;
    }
  }
  function getScore(word, guess) {
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
    // check for no lives
    if (lives === 0) {
      document.getElementById("game_end").innerText =
        "Sie haben verloren, das gesuchte Wort lautete: " + word;
      return;
    }
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
      game_status = game_status + getScore(word, guess) + "\n";
      document.getElementById("guess_input").value = "";
      lives--;
      document.getElementById("current_guess").innerText = game_status;
    }
  }

  function search(ele) {
    if (event.key === "Enter") {
      attempt(ele.value, word);
    }
  }

  function draw_boxes() {
    let word_grid = document.getElementById("word_grid");
    console.log("word_grid:", word_grid);
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("div");
      row.className = "row";
      row.setAttribute("id", "row_" + i);
      word_grid.appendChild(row);
      for (let j = 0; j < 5; j++) {
        let box = document.createElement("div");
        box.className = "box";
        box.setAttribute("id", "box_" + i + "_" + j);
        row.appendChild(box);
      }
    }
  }
  draw_boxes();
});
