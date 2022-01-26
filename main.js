document.addEventListener("DOMContentLoaded", () => {
  let words = [
    "kurve",
    "lyrik",
    "story",
    "tisch",
    "duell",
    "tiger",
    "feuer",
    "klage",
    "thema",
    "hosen",
    "brief",
    "gnade",
    "hüfte",
    "börse",
    "bibel",
    "indiz",
    "schon",
    "fähre",
    "lokal",
    "linie",
    "licht",
    "major",
    "figur",
    "abend",
    "ecken",
    "armut",
    "essen",
    "laune",
    "album",
    "thron",
    "trick",
    "kabel",
    "möbel",
    "polen",
    "prinz",
    "woche",
    "these",
    "tante",
    "paris",
    "sicht",
    "hanau",
    "würde",
    "kunde",
    "hürde",
    "leben",
    "täter",
    "stein",
    "übung",
    "chile",
    "stahl",
    "mauer",
    "hölle",
    "elite",
    "glanz",
    "kanal",
    "bühne",
    "trend",
    "bombe",
    "coach",
    "münze",
    "dürre",
    "engel",
    "käfer",
    "jubel",
    "frust",
    "fahne",
    "frage",
    "insel",
    "ampel",
    "summe",
    "härte",
    "kunst",
    "luxus",
    "franz",
    "kairo",
    "hitze",
    "durch",
    "sound",
    "preis",
    "wüste",
    "probe",
    "athen",
    "rauch",
    "kohle",
    "party",
    "ohren",
    "blues",
    "paket",
    "rente",
    "kälte",
    "feier",
    "börse",
    "waffe",
    "motiv",
    "ärger",
    "opfer",
    "forum",
    "alter",
    "geste",
    "trotz",
    "sucht",
    "stuhl",
    "leder",
    "focus",
    "onkel",
    "autos",
    "lücke",
    "jesus",
    "front",
    "kraft",
    "julia",
    "rache",
    "sache",
    "zelle",
    "umbau",
    "asien",
    "treue",
    "mönch",
    "motor",
    "sonne",
    "peter",
    "ärmel",
    "osten",
    "jetzt",
    "höhle",
    "möbel",
    "bruch",
    "senat",
    "nebel",
    "gerät",
    "handy",
    "rhein",
    "profi",
    "sehen",
    "markt",
    "regie",
    "druck",
    "küste",
    "miete",
    "rolle",
    "bühne",
    "klang",
    "flöte",
    "bogen",
    "dreck",
    "horst",
    "übung",
    "adler",
    "umzug",
    "frist",
    "klaus",
    "logik",
    "roman",
    "wärme",
    "macht",
    "image",
    "treff",
    "gebot",
    "anruf",
    "griff",
    "grund",
    "braun",
    "würde",
    "pferd",
    "reise",
    "karte",
    "glück",
    "start",
    "suche",
    "könig",
    "ärger",
    "beleg",
    "glück",
    "index",
    "gehör",
    "küste",
    "strom",
    "trost",
    "gehen",
    "lebed",
    "täter",
    "weile",
    "stolz",
    "japan",
    "folge",
    "mütze",
    "marke",
    "chaos",
    "hotel",
    "regen",
    "kenia",
    "konto",
    "josef",
    "datum",
    "fötus",
    "group",
    "süden",
    "junge",
    "april",
    "mönch",
    "feind",
    "ethik",
    "parks",
    "anbau",
    "staub",
    "laien",
    "hilfe",
    "stich",
    "maske",
    "maler",
    "hügel",
    "messe",
    "gehör",
    "mühle",
    "kopie",
    "mühle",
    "segen",
    "radio",
    "kälte",
    "kugel",
    "käfer",
    "stadt",
    "stirn",
    "bernd",
    "säule",
    "bauer",
    "fürst",
    "laden",
    "rasen",
    "route",
    "block",
    "gunst",
    "bauch",
    "magen",
    "hafen",
    "dämon",
    "könig",
    "leere",
    "hütte",
    "witwe",
    "sport",
    "reihe",
    "wüste",
    "faust",
    "kreml",
    "dürre",
    "regel",
    "firma",
    "köder",
    "hölle",
    "könig",
    "armee",
    "rubel",
    "arena",
    "debüt",
    "decke",
    "müsli",
    "spiel",
    "fötus",
    "union",
    "büste",
    "meter",
    "küche",
    "dämon",
    "liebe",
    "diana",
    "brust",
    "wiese",
    "stamm",
    "blüte",
    "münze",
    "süden",
    "boden",
    "zunge",
    "virus",
    "jäger",
    "säule",
    "sturm",
    "natur",
    "gramm",
    "alpen",
    "blüte",
    "guten",
    "sekte",
    "angst",
    "waren",
    "sagen",
    "todes",
    "tokio",
    "stock",
    "papst",
    "liste",
    "quote",
    "platz",
    "bezug",
    "abzug",
    "fazit",
    "seoul",
    "elend",
    "erlös",
    "foyer",
    "runde",
    "glück",
    "frank",
    "ehren",
    "ziele",
    "farbe",
    "hütte",
    "petra",
    "tonne",
    "szene",
    "halle",
    "könig",
    "orden",
    "zeile",
    "georg",
    "pfund",
    "lehre",
    "kette",
    "jeans",
    "kampf",
    "höhle",
    "wesen",
    "monat",
    "pilot",
    "noten",
    "vogel",
    "erlös",
    "titel",
    "leute",
    "kader",
    "krone",
    "stern",
    "beute",
    "moral",
    "mainz",
    "liter",
    "fürst",
    "alarm",
    "daten",
    "fahrt",
    "fülle",
    "aktie",
    "beton",
    "beruf",
    "kreis",
    "masse",
    "buben",
    "ebene",
    "heinz",
    "match",
    "stufe",
    "minus",
    "blick",
    "pause",
    "datei",
    "china",
    "fähre",
    "blatt",
    "bande",
    "seele",
    "alles",
    "gerät",
    "krise",
    "enkel",
    "labor",
    "zwang",
    "autor",
    "falle",
    "brand",
    "hauch",
    "phase",
    "dauer",
    "drama",
    "tenor",
    "rande",
    "humor",
    "mütze",
    "zitat",
    "donau",
    "serie",
    "anzug",
    "ferne",
    "seite",
    "menge",
    "stand",
    "mitte",
    "glück",
    "hürde",
    "schau",
    "tempo",
    "panik",
    "welle",
    "lücke",
    "unmut",
    "traum",
    "krebs",
    "staat",
    "lager",
    "köder",
    "flöte",
    "areal",
    "bayer",
    "weise",
    "prosa",
    "ernst",
    "tiefe",
    "sauna",
    "milch",
    "eisen",
    "islam",
    "fülle",
    "sorge",
    "vater",
    "krieg",
    "fisch",
    "wille",
    "küche",
    "leser",
    "debüt",
    "wende",
    "basis",
    "video",
    "spree",
    "nacht",
    "ärmel",
    "klima",
    "neben",
    "motto",
    "allee",
    "wagen",
    "mafia",
    "fuchs",
    "hüfte",
    "zweck",
    "kreuz",
    "basel",
    "votum",
    "ernte",
    "härte",
    "geist",
    "abbau",
    "müsli",
    "jäger",
    "kohls",
    "buche",
    "villa",
    "sturz",
    "wärme",
    "büste",
    "punkt",
    "musik",
    "recht",
    "hügel",
    "media",
    "stoff",
    "sinne",
    "heute",
    "zeuge",
    "maria",
    "photo",
    "bitte",
    "kasse",
    "nagel",
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
    for (let w of guess)
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
    const rows = ["qwertzuiopü", "asdfghjklöä", "yxcvbnm"];

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
