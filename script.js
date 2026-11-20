const questions = [
  {
    difficulty: "Runde 1 · Leichtes Kennenlernen",
    text: "Was macht Flavia beruflich?",
    answers: ["Lehrerin", "Buchhalterin", "Erzieherin", "Personaltrainerin"],
    correct: 0,
    reveal: "Ich bin Lehrerin — ein bisschen Weisheit, ein bisschen Chaos.",
  },
  {
    difficulty: "Runde 2 · Alltag",
    text: "Welche Klasse unterrichtet Flavia?",
    answers: ["4. Klasse", "5. Klasse", "6. Klasse", "7. Klasse"],
    correct: 2,
    reveal: "Die sechste Klasse! Dort trifft meine Kreativität auf große Schulhof-Dramen.",
  },
  {
    difficulty: "Runde 3 · Stil",
    text: "Welche Farbe passt am besten zu Flavia?",
    answers: ["Grün", "Blau", "Pink", "Hellblau"],
    correct: 2,
    reveal: "Pink natürlich — auffällig, verspielt und zu hundert Prozent ich.",
  },
  {
    difficulty: "Runde 4 · Freizeit",
    text: "Was macht Flavia am liebsten in ihrer Freizeit?",
    answers: ["Sport", "Gaming", "Basteln", "Fotografieren"],
    correct: 2,
    reveal: "Ich bastele am liebsten — aus Papier, Ideen und ein bisschen Chaos entstehen meine Lieblingsstücke.",
  },
  {
    difficulty: "Runde 5 · Lieblingsmarke",
    text: "Welche Marke liebt Flavia am meisten?",
    answers: ["Nike", "Puma", "Adidas", "New Balance"],
    correct: 2,
    reveal: "Adidas! Meine Lieblingsmarke ist bequem, sportlich und trotzdem alltagstauglich.",
  },
  {
    difficulty: "Runde 6 · Snackpause",
    text: "Welchen Snack isst Flavia besonders gerne?",
    answers: ["Oliven", "Essiggurken", "Kartoffelchips", "Haribo"],
    correct: 1,
    reveal: "Pickles! Knackig, sauer und perfekt für meinen kleinen Snack-Moment.",
  },
  {
    difficulty: "Runde 7 · Geschmack",
    text: "Welches Gewürz gehört zu Flavias Favoriten?",
    answers: ["Paprika edelsüß", "Aromat", "Curry", "Knoblauchpulver"],
    correct: 1,
    reveal: "Aromat — praktisch, würzig und genau mein Geschmack.",
  },
  {
    difficulty: "Runde 8 · Persönlicher Stil",
    text: "Wie viele Tattoos hat Flavia?",
    answers: ["6 Tattoos", "9 Tattoos", "12 Tattoos", "15 Tattoos"],
    correct: 2,
    reveal: "Ich habe 12 Tattoos — meine Haut ist eine kleine persönliche Galerie.",
  },
  {
    difficulty: "Runde 9 · Tierliebe",
    text: "Welche beiden Tiere gehören zu Flavias Favoriten?",
    answers: ["Hunde und Katzen", "Katzen und weiße Pferde", "Kaninchen und Pferde", "Katzen und Füchse"],
    correct: 1,
    reveal: "Meine Lieblingstiere sind Katzen und weiße Pferde — kuschelig und elegant.",
  },
  {
    difficulty: "Runde 10 · Besondere Talente",
    text: "Was kann Flavia besonders gut?",
    answers: ["Laufen", "Werfen", "Schwimmen", "Reiten"],
    correct: 2,
    reveal: "Ich kann besonders gut schwimmen — ins Wasser fühle ich mich einfach richtig wohl.",
  },
  {
    difficulty: "Runde 11 · Alltagsschwäche",
    text: "Welche alltägliche Fähigkeit fällt Flavia besonders schwer?",
    answers: ["Einkaufen", "Kochen", "Parken", "Früh aufstehen"],
    correct: 2,
    reveal: "Parken — offenbar braucht dafür jedes Auto eine extra Umarmung von mir.",
  },
  {
    difficulty: "Runde 12 · Ohne Brille",
    text: "Womit verbessert Flavia ihre Sehschärfe?",
    answers: ["Mit einer Lesebrille", "Mit Kontaktlinsen", "Mit einer Sonnenbrille", "Mit einer Bildschirmbrille"],
    correct: 1,
    reveal: "Mit Kontaktlinsen — praktisch, diskret und ich bin immer bereit für den Blick in die Ferne.",
  },
  {
    difficulty: "Runde 13 · Kindheit",
    text: "Welche Aufgabe musste Flavia als Kind erledigen?",
    answers: ["Gedichte auswendig lernen", "Tagebuch führen", "Postkarten schreiben", "Zeitungen austragen"],
    correct: 2,
    reveal: "Ich musste als Kind Postkarten schreiben — dieses Detail merkt man sich erst nach echtem Kennenlernen.",
  },
  {
    difficulty: "Runde 14 · Inselbuch",
    text: "Welches Buchgenre würde Flavia auf eine einsame Insel mitnehmen?",
    answers: ["Krimi", "Fantasy-Romane", "Darkromance-Bücher", "Reiseführer"],
    correct: 2,
    reveal: "Darkromance — auf meiner einsamen Insel darf es ruhig dramatisch werden.",
  },
  {
    difficulty: "Runde 15 · Familiengeheimnis",
    text: "Wofür ist Flavias Onkel besonders bekannt?",
    answers: ["Für extreme Hobbys", "Für Verschwörungstheorien", "Für laute Festreden", "Für Zaubertricks"],
    correct: 1,
    reveal: "Mein Onkel ist Verschwörungstheoretiker — bei unseren Familientreffen wird es niemals langweilig.",
  },
  {
    difficulty: "Runde 16 · Heimlicher Wunsch",
    text: "Welchen Spitznamen wünscht sich Flavia heimlich?",
    answers: ["Mondfee", "Flava-Bean", "Flavorite", "Blumen-Chaos"],
    correct: 2,
    reveal: "„Flavorite“ — meinen Wunsch-Spitzname für echte Lieblingsmenschen.",
  },
  {
    difficulty: "Runde 17 · Kuscheltier-Wunsch",
    text: "Welches Tier würde Flavia am liebsten adoptieren?",
    answers: ["Ein Mini-Schwein", "Eine Katze", "Einen Fuchs", "Ein Alpaka"],
    correct: 1,
    reveal: "Eine Katze — kuschelig, eigenständig und garantiert mit eigener Agenda.",
  },
  {
    difficulty: "Runde 18 · Liebesgeschichte",
    text: "Wo hat Flavia die Liebe ihres Lebens kennengelernt?",
    answers: ["In einem Restaurant", "Auf dem Oktoberfest", "In einer Kneipe", "Bei einem Konzert"],
    correct: 1,
    reveal: "Auf dem Oktoberfest — zwischen Dirndl, Brezn und meiner Geschichte fürs Leben.",
  },
  {
    difficulty: "Runde 19 · Chaos-Favorit",
    text: "Wie heißt Flavias Lieblingsmeme?",
    answers: ["Tüdelülelu Oma", "Ich muss raus, Junge", "Ich habe eine neue Tasse", "Getrocknete Bananen"],
    correct: 0,
    reveal: "„Tüdelülelu Oma“ — genau mein humorvoll-verrücktes Lieblingsmeme.",
  },
  {
    difficulty: "Runde 20 · Nur für wahre Kenner",
    text: "Welcher Satz beschreibt Flavia am besten?",
    answers: [
      "Immer organisiert und ruhig",
      "Laut, aber komplett planlos",
      "Chaos mit Herz",
      "Nur aufs Äußere bedacht",
    ],
    correct: 2,
    reveal: "„Chaos mit Herz“ — genau ihr Level. Jetzt kennst du Flavia wirklich.",
  },
];

const welcomeScreen = document.querySelector("#welcome");
const quizScreen = document.querySelector("#quiz");
const resultScreen = document.querySelector("#result");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers");
const roundNumber = document.querySelector("#round-number");
const progressFill = document.querySelector("#progress-fill");
const difficulty = document.querySelector("#difficulty");
const livesContainer = document.querySelector("#lives");
const bubble = document.querySelector("#flavia-bubble");
const bubbleText = document.querySelector("#flavia-comment");
const catPeek = document.querySelector("#cat-peek");
const answerSticker = document.querySelector("#answer-sticker");
const roundDots = document.querySelector("#round-dots");

let currentQuestion = 0;
let score = 0;
let mistakes = 0;
let locked = false;
let currentStreak = 0;
let bestStreak = 0;
let audioContext = null;
let soundEnabled = true;

function playTone(kind) {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const notes = kind === "good" ? [523.25, 659.25, 783.99] : kind === "bad" ? [220, 196] : [392, 523.25];
    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = kind === "bad" ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, now + index * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.055, now + index * 0.07 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.07 + 0.16);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now + index * 0.07);
      oscillator.stop(now + index * 0.07 + 0.18);
    });
  } catch (_) {
    soundEnabled = false;
  }
}

function updateStreak() {
  const streak = document.querySelector("#streak");
  streak.textContent = `${currentStreak}×`;
  streak.classList.toggle("hot", currentStreak >= 2);
}

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  mistakes = 0;
  currentStreak = 0;
  bestStreak = 0;
  locked = false;
  showScreen(quizScreen);
  renderQuestion();
  createPetals(7);
}

function renderLives() {
  livesContainer.innerHTML = "";
  for (let index = 0; index < 3; index += 1) {
    const heart = document.createElement("span");
    heart.className = `life${index < 3 - mistakes ? "" : " lost"}`;
    heart.textContent = "♥";
    heart.setAttribute("aria-hidden", "true");
    livesContainer.appendChild(heart);
  }
  livesContainer.setAttribute("aria-label", `${3 - mistakes} von 3 Leben übrig`);
}

function renderRoundDots() {
  roundDots.innerHTML = "";
  questions.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "round-dot";
    if (index < currentQuestion) dot.classList.add("done");
    if (index === currentQuestion) dot.classList.add("current");
    roundDots.appendChild(dot);
  });
}

function renderQuestion() {
  locked = false;
  const question = questions[currentQuestion];
  const questionCard = document.querySelector(".question-card");
  questionCard.classList.remove("question-enter");
  void questionCard.offsetWidth;
  questionCard.classList.add("question-enter");
  roundNumber.textContent = String(currentQuestion + 1);
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  difficulty.textContent = question.difficulty;
  questionText.textContent = question.text;
  bubble.classList.remove("visible");
  catPeek.classList.remove("show");
  answerSticker.className = "answer-sticker";
  renderLives();
  renderRoundDots();
  updateStreak();

  answersContainer.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index));
    answersContainer.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (locked) return;
  locked = true;

  const question = questions[currentQuestion];
  const buttons = [...answersContainer.querySelectorAll(".answer-button")];
  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (index === question.correct) {
    score += 1;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    buttons[index].classList.add("correct");
    const goodComments = [
      "Das war sauber. Du kennst mich offenbar besser als gedacht — kleine Punkte sammeln sich eben.",
      "Stimmt! Damit bist du definitiv nicht nur zufällig unterwegs. Ich merke mir diesen Treffer.",
      "Sehr stark. Genau solche Details zeigen mir, dass du wirklich zugehört hast.",
      "Exakt. Ich bin beeindruckt — und ja, dafür darfst du beim nächsten Ausgang dabei sein.",
      "Treffer ins Schwarze. Meine Art ist vielleicht speziell, aber du bist offenbar drin.",
    ];
    bubbleText.textContent = `${goodComments[Math.floor(Math.random() * goodComments.length)]} ${question.reveal}`;
    answerSticker.textContent = ["Clean getroffen", "Du kennst dein Zeug", "Sicher gegessen", "Nicht schlecht!"][Math.floor(Math.random() * 4)];
    answerSticker.className = "answer-sticker good show";
    createPetals(4);
    playTone("good");
  } else {
    mistakes += 1;
    currentStreak = 0;
    buttons[index].classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    const badComments = [
      "Ey, ernsthaft? Bei mir wäre das nicht mal eine Option gewesen. Dafür gibt es einen kleinen zweiten Blick.",
      "Das war ein bisschen daneben. Bleib locker — meine verrückten Details musst du erst kennenlernen.",
      "Nope. Vielleicht sollten wir vorher ein paar Stunden quatschen, dann passt die Antwort beim nächsten Mal.",
      "Das war leider nicht meine Antwort. Ich verzeihe dir einmal — merk dir den nächsten Fact gut.",
      "Den Punkt schenke ich dir nicht, sorry. Keine Sorge, du bekommst genug Chancen, mich zu überzeugen.",
    ];
    bubbleText.textContent = `${badComments[Math.floor(Math.random() * badComments.length)]} ${question.reveal}`;
    answerSticker.textContent = ["Voll daneben", "Bei mir wär's anders", "Nicht so schnell", "Cringe, aber süß"][Math.floor(Math.random() * 4)];
    answerSticker.className = "answer-sticker bad show";
    playTone("bad");
  }

  updateStreak();

  const selectedAnswer = question.answers[index];
  if (/katze|katzen|kätz/i.test(selectedAnswer) || /katze|katzen|kätz/i.test(question.answers[question.correct])) {
    catPeek.classList.add("show");
  }

  renderLives();
  bubble.classList.add("visible");

  window.setTimeout(() => {
    currentQuestion += 1;
    if (mistakes >= 3 || currentQuestion >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }, 2200);
}

function showResult() {
  showScreen(resultScreen);
  const percentage = Math.round((score / questions.length) * 100);
  const ring = document.querySelector("#score-ring");
  const ringDegrees = Math.round((score / questions.length) * 360);

  document.querySelector("#score-value").textContent = String(score);
  document.querySelector("#score-total").textContent = `von ${questions.length} Runden`;
  document.querySelector("#flavia-mentions").textContent = String(score);
  document.querySelector("#accuracy-value").textContent = `${percentage}%`;
  document.querySelector("#best-streak").textContent = String(bestStreak);

  let savedBest = 0;
  try {
    savedBest = Number(localStorage.getItem("flaviaQuizBestScore")) || 0;
  } catch (_) {}
  if (score > savedBest) {
    savedBest = score;
    try {
      localStorage.setItem("flaviaQuizBestScore", String(savedBest));
    } catch (_) {}
  }
  document.querySelector("#best-score").textContent = `${savedBest}/${questions.length}`;
  document.querySelector("#relationship-fill").style.width = `${percentage}%`;
  document.querySelector("#relationship-marker").style.left = `${percentage}%`;
  ring.style.background =
    `radial-gradient(circle, #fff 0 57%, transparent 58%), ` +
    `conic-gradient(var(--hot-pink) 0deg ${ringDegrees}deg, #f6dbe5 ${ringDegrees}deg 360deg)`;

  let result;
  if (score === questions.length) {
    result = {
      kicker: "Best Friends Forever",
      title: "Okay, du bist wirklich dabei",
      recognition: "Du kennst mich besser als viele Leute in meinem Umfeld. Das ist jetzt nicht mehr Zufall.",
    };
  } else if (percentage >= 75) {
    result = {
      kicker: "Top Level",
      title: "Du kennst mich ziemlich gut",
      recognition: "Ein paar Details fehlen noch, aber du hast meinen ganzen Vibe schon verstanden.",
    };
  } else if (percentage >= 50) {
    result = {
      kicker: "Solider Überblick",
      title: "Wir kennen uns halbwegs",
      recognition: "Du kennst meinen Alltag ganz gut. Für die wirklich verrückten Details fehlt aber noch Zeit.",
    };
  } else if (percentage >= 25) {
    result = {
      kicker: "Noch viel zu erleben",
      title: "Wir sollten uns treffen",
      recognition: "Du hast ein paar Sachen erraten, aber die guten Storys kennst du noch nicht.",
    };
  } else {
    result = {
      kicker: "Du hast mich gerade kennengelernt",
      title: "Okay, wo warst du?",
      recognition: "Das war keine gute Runde für dich. Zum Glück bist du für eine zweite Runde sowieso eingeladen.",
    };
  }

  document.querySelector("#result-kicker").textContent = result.kicker;
  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#recognition").textContent = result.recognition;
  const finalMessages = {
    perfect: "Du hast mich wirklich komplett erwischt. Nicht mit Glück — mit Aufmerksamkeit. Das ist fast schon ein bisschen gefährlich.",
    high: "Du kennst meinen Stil, meine Geschichten und einen großen Teil von mir. Ein paar Details fehlen noch, aber wir sind auf einem sehr guten Weg.",
    medium: "Du kennst mich inzwischen besser als beim ersten Blick. Für die richtig persönlichen Storys gibt es aber definitiv noch Gespräche.",
    low: "Du hast gerade erst gesehen, wie vielseitig ich sein kann. Das war erst die erste Runde von uns beiden.",
  };
  const finalMessage =
    percentage === 100 ? finalMessages.perfect :
    percentage >= 75 ? finalMessages.high :
    percentage >= 50 ? finalMessages.medium : finalMessages.low;
  document.querySelector("#final-message").textContent = finalMessage;

  animateScore(score);
  createConfetti(percentage >= 75 ? 28 : 16);
  createPetals(24);
  playTone(percentage >= 75 ? "good" : "result");
}

function animateScore(target) {
  const scoreElement = document.querySelector("#score-value");
  const startTime = performance.now();
  const duration = 850;

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    scoreElement.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function createConfetti(amount) {
  const container = document.querySelector(".petals");
  for (let index = 0; index < amount; index += 1) {
    const heart = document.createElement("span");
    heart.className = "petal";
    heart.textContent = index % 3 === 0 ? "♥" : "✦";
    heart.style.width = "18px";
    heart.style.height = "18px";
    heart.style.display = "grid";
    heart.style.placeItems = "center";
    heart.style.background = "transparent";
    heart.style.color = index % 2 ? "#dc668f" : "#f1aec3";
    heart.style.fontSize = `${10 + Math.random() * 9}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2.4 + Math.random() * 2.2}s`;
    heart.style.animationDelay = `${Math.random() * 0.45}s`;
    heart.style.setProperty("--drift", `${-120 + Math.random() * 240}px`);
    container.appendChild(heart);
    window.setTimeout(() => heart.remove(), 5200);
  }
}

function createPetals(amount) {
  const container = document.querySelector(".petals");
  for (let index = 0; index < amount; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${2.8 + Math.random() * 2.8}s`;
    petal.style.animationDelay = `${Math.random() * 0.8}s`;
    petal.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    petal.style.transform = `rotate(${Math.random() * 180}deg)`;
    container.appendChild(petal);
    window.setTimeout(() => petal.remove(), 6500);
  }
}

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#restart-button").addEventListener("click", startQuiz);
document.querySelector("#home-button").addEventListener("click", () => showScreen(welcomeScreen));
document.querySelector("#result-home-button").addEventListener("click", () => showScreen(welcomeScreen));
document.querySelector("#share-button").addEventListener("click", async () => {
  const text = `Ich habe ${score} von ${questions.length} Runden im Flavia Quiz geschafft!`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Flavia Quiz", text });
      return;
    } catch (_) {}
  }
  try {
    await navigator.clipboard.writeText(text);
    const button = document.querySelector("#share-button");
    const original = button.innerHTML;
    button.textContent = "Kopiert!";
    window.setTimeout(() => {
      button.innerHTML = original;
    }, 1600);
  } catch (_) {}
});

document.querySelector("#sound-button").addEventListener("click", (event) => {
  soundEnabled = !soundEnabled;
  event.currentTarget.textContent = soundEnabled ? "♪" : "×";
  event.currentTarget.setAttribute("aria-label", soundEnabled ? "Töne ausschalten" : "Töne einschalten");
  event.currentTarget.setAttribute("aria-pressed", String(soundEnabled));
  if (soundEnabled) playTone("result");
});
