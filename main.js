document.addEventListener("DOMContentLoaded", () => {
  let words = [
    "stadt",
    "leben",
    "frage",
    "woche",
    "platz",
    "thema",
    "seite",
    "hilfe",
    "markt",
    "leute",
    "grund",
    "rolle",
    "meter",
    "april",
    "spiel",
    "musik",
    "mitte",
    "daten",
    "kunst",
    "jetzt",
    "schon",
    "durch",
    "titel",
    "staat",
    "nacht",
    "krieg",
    "opfer",
    "firma",
    "paris",
    "recht",
    "sache",
    "weise",
    "vater",
    "preis",
    "blick",
    "druck",
    "kampf",
    "heute",
    "kreis",
    "angst",
    "macht",
    "folge",
    "osten",
    "trotz",
    "boden",
    "peter",
    "china",
    "abend",
    "liebe",
    "neben",
    "sicht",
    "japan",
    "roman",
    "reihe",
    "monat",
    "liste",
    "autor",
    "alter",
    "autos",
    "menge",
    "union",
    "kraft",
    "polen",
    "natur",
    "suche",
    "basis",
    "armee",
    "licht",
    "senat",
    "runde",
    "sinne",
    "punkt",
    "tisch",
    "wagen",
    "start",
    "reise",
    "aktie",
    "krise",
    "insel",
    "sport",
    "szene",
    "klaus",
    "stand",
    "motto",
    "hotel",
    "alles",
    "halle",
    "essen",
    "sonne",
    "brief",
    "trend",
    "feuer",
    "leser",
    "dauer",
    "maria",
    "falle",
    "ziele",
    "ebene",
    "lager",
    "summe",
    "frank",
    "wende",
    "heinz",
    "strom",
    "linie",
    "klage",
    "franz",
    "beruf",
    "serie",
    "fahrt",
    "horst",
    "traum",
    "josef",
    "junge",
    "bernd",
    "tokio",
    "sorge",
    "messe",
    "ernst",
    "rande",
    "phase",
    "asien",
    "geist",
    "zweck",
    "kasse",
    "abbau",
    "brand",
    "farbe",
    "georg",
    "pause",
    "waren",
    "kunde",
    "blatt",
    "pfund",
    "seele",
    "regie",
    "figur",
    "liter",
    "mauer",
    "marke",
    "regen",
    "lehre",
    "tempo",
    "klima",
    "papst",
    "stoff",
    "stein",
    "image",
    "maler",
    "forum",
    "griff",
    "konto",
    "hafen",
    "regel",
    "ohren",
    "bezug",
    "stock",
    "wesen",
    "stern",
    "mainz",
    "umbau",
    "chaos",
    "sturm",
    "rente",
    "datum",
    "armut",
    "umzug",
    "masse",
    "abzug",
    "radio",
    "karte",
    "minus",
    "front",
    "index",
    "vogel",
    "hanau",
    "tiefe",
    "stufe",
    "laden",
    "bitte",
    "schau",
    "stich",
    "these",
    "rhein",
    "moral",
    "gramm",
    "motiv",
    "bauer",
    "stolz",
    "sturz",
    "zeile",
    "waffe",
    "faust",
    "fazit",
    "quote",
    "motor",
    "bayer",
    "photo",
    "bruch",
    "zeuge",
    "islam",
    "frist",
    "miete",
    "villa",
    "engel",
    "humor",
    "stahl",
    "bombe",
    "athen",
    "petra",
    "beleg",
    "kreuz",
    "drama",
    "beute",
    "bauch",
    "brust",
    "prinz",
    "video",
    "votum",
    "milch",
    "coach",
    "welle",
    "glanz",
    "krebs",
    "pferd",
    "zelle",
    "logik",
    "lyrik",
    "feier",
    "alpen",
    "feind",
    "group",
    "geste",
    "wille",
    "trost",
    "kohle",
    "stuhl",
    "mafia",
    "decke",
    "krone",
    "wiese",
    "block",
    "fisch",
    "hitze",
    "seoul",
    "rasen",
    "ferne",
    "panik",
    "rache",
    "party",
    "datei",
    "areal",
    "unmut",
    "staub",
    "elend",
    "kanal",
    "zwang",
    "kairo",
    "duell",
    "fuchs",
    "paket",
    "major",
    "labor",
    "noten",
    "basel",
    "kette",
    "profi",
    "bibel",
    "leere",
    "weile",
    "virus",
    "bogen",
    "handy",
    "kabel",
    "onkel",
    "braun",
    "nebel",
    "kohls",
    "maske",
    "foyer",
    "focus",
    "rubel",
    "buche",
    "chile",
    "kreml",
    "laune",
    "blues",
    "stirn",
    "eisen",
    "bande",
    "witwe",
    "ehren",
    "enkel",
    "hauch",
    "jesus",
    "klang",
    "lokal",
    "arena",
    "todes",
    "tonne",
    "donau",
    "luxus",
    "stamm",
    "beton",
    "segen",
    "album",
    "media",
    "sagen",
    "guten",
    "kader",
    "anbau",
    "kugel",
    "match",
    "ecken",
    "sehen",
    "jubel",
    "laien",
    "probe",
    "sekte",
    "prosa",
    "jeans",
    "gebot",
    "ernte",
    "spree",
    "hosen",
    "frust",
    "anzug",
    "treue",
    "tenor",
    "fahne",
    "pilot",
    "lebed",
    "elite",
    "anruf",
    "kopie",
    "nagel",
    "story",
    "kurve",
    "treff",
    "dreck",
    "kenia",
    "tiger",
    "tante",
    "route",
    "ethik",
    "rauch",
    "adler",
    "zunge",
    "buben",
    "gehen",
    "alarm",
    "sound",
    "trick",
    "indiz",
    "zitat",
    "gunst",
    "allee",
    "sucht",
    "leder",
    "diana",
    "sauna",
    "magen",
    "gnade",
    "orden",
    "thron",
    "julia",
    "ampel",
    "parks",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
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
  function drawKeyboard() {
    const rows = ["qwertzuiop", "asdfghjkl", "yxcvbnm"];

    let virtualKeyboard = document.getElementById("virtual_keyboard");
    for (let i = 0; i < 3; i++) {
      let keyboardRow = document.createElement("div");
      keyboardRow.className = "keyboard_row";
      keyboardRow.setAttribute("id", "keyboard_row" + i);
      virtualKeyboard.appendChild(keyboardRow);
      for (let c of rows[i]) {
        let keyObject = { key: c };
        let key = document.createElement("div");
        key.className = "key";
        key.setAttribute("id", "key_" + i + "_" + c);
        key.innerText = c.toUpperCase();
        key.addEventListener("click", function () {
          processKey(keyObject);
        });
        keyboardRow.appendChild(key);
      }
    }
    // add Enter and Backspace seperately, this should be DRYed but idc its 1am
    let enterKey = document.createElement("div");
    let backspaceKey = document.createElement("div");
    enterKey.className = "extrakey";
    backspaceKey.className = "extrakey";
    enterKey.innerText = "ENTER";
    backspaceKey.innerText = "DEL";
    enterKey.addEventListener("click", function () {
      processKey({ key: "Enter" });
    });
    backspaceKey.addEventListener("click", function () {
      processKey({ key: "Backspace" });
    });
    let thirdRow = document.getElementById("keyboard_row2");
    thirdRow.insertBefore(enterKey, thirdRow.firstChild);
    thirdRow.appendChild(backspaceKey);
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
  drawKeyboard();
});
