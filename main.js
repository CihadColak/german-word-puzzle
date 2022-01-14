document.addEventListener("DOMContentLoaded", () => {
  let word = "gruft";
  let lives = 6;
  let game_status = "";
  let error_message = "";
  let current_row = 0;
  let current_char = 0;
  let won = false;
  document.addEventListener("keydown", processKey);

  function read_attempt(row) {
    let guess = "";
    for (let i = 0; i < 5; i++) {
      guess = guess + document.getElementById("box_" + row + "_" + i).innerHTML;
    }
    return guess;
  }

  function processKey(e) {
    //console.log(e);
    let current_box_id = "box_" + current_row + "_" + current_char;
    console.log(current_box_id);
    let previous_box_id = "box_" + current_row + "_" + (current_char - 1);
    if (won) {
      return;
    }

    // check if enter is pressed
    if (e.key === "Enter") {
      let guess = read_attempt(current_row);

      if (guess.length !== 5) {
        document.getElementById("error_message").innerText =
          "Das gesuchte Wort besteht aus 5 Zeichen!";
        return;
      }
      document.getElementById("error_message").innerText = "";
      let score = getScore(word, guess);
      colorRow(current_row, score);
      let winCount = score.filter((x) => x === "darkseagreen").length;
      if (winCount === 5) {
        won = true;
        alert("Sie haben gewonnen!");
      }
      current_row++;
      current_char = 0;

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
    if (e.key.match("^[a-zA-Z()]+$") && e.key.length === 1) {
      document.getElementById(current_box_id).innerHTML = e.key.toUpperCase();

      current_char++;
    }
  }
  function getScore(word, guess) {
    guess = guess.toLowerCase();
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
        score.push("darkseagreen");
      } else if (word.includes(guess[i])) {
        score.push("khaki");
      } else {
        score.push("lightgrey");
      }
    }
    return score;
  }

  function colorRow(row, score) {
    for (let i = 0; i < 5; i++) {
      let currentBoxId = "box_" + row + "_" + i;
      let currentBox = document.getElementById(currentBoxId);
      currentBox.style.color = "white";
      currentBox.style.backgroundColor = score[i];
    }
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

  function draw_boxes() {
    let word_grid = document.getElementById("word_grid");
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
