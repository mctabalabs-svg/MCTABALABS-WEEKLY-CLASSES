const questions = [
  { 
    text: "Capital of France?",
    options: ["Paris", "Rome", "Berlin"],
    answer: 0
  },
  { 
    text: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: 1
  },
  { 
    text: "Largest planet?",
    options: ["Earth", "Jupiter", "Mars"],
    answer: 1,
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
  let q = questions[currentQuestion];
  questionEl.textContent = q.text;
  optionsEl.innerHTML = ""; 

  q.options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.addEventListener("click", () => checkAnswer(i));
    optionsEl.appendChild(btn);
  });

  feedbackEl.textContent = "";
}

function checkAnswer(i) {
  let correct = questions[currentQuestion].answer;
  if (i === correct) {
    feedbackEl.textContent = "Correct!";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = "Incorrect!";
  }
  // disable all buttons after answer
  document.querySelectorAll(".option").forEach(b => b.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `Final Score: ${score}/${questions.length}`;
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreEl.textContent = score;
  loadQuestion();
});

// Initialize
loadQuestion();
