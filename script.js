  // Array med spørgsmål, svar og forklaringer til quizzen
  const questions = [
    {
        question: "Alkohol dræber hjerneceller.",
        correctAnswer: false,
        explanation: "Alkohol skader ikke direkte hjerneceller. Dog kan overdreven alkoholforbrug skade hjernen og forårsage forskellige sundhedsmæssige problemer."
    },
    {
        question: "Det er farligt at blande alkohol med energidrikke.",
        correctAnswer: true,
        explanation: "At blande alkohol med energidrikke kan maskere virkningerne af alkohol og føre til overforbrug."
    },
    {
        question: "At spise en stor måltid før du drikker, vil forhindre tømmermænd",
        correctAnswer: false,
        explanation: "Mad kan forsinke optagelsen af alkohol, men det forhindrer ikke nødvendigvis tømmermænd. Det kan dog reducere intensiteten."
    },
    {
        question: "Alkohol påvirker hjernen 6 minutter efter indtagelse",
        correctAnswer: true,
        explanation: "Når du indtager alkohol, absorberes det hurtigt i blodbanen gennem mave og tarm, så på blot 6 minutter kan alkohol nå hjernen"
    },
    {
        question: "Alkohol varmer dig op",
        correctAnswer: false,
        explanation: "Alkohol får blodkarrene til at udvide sig, hvilket kan give en følelse af varme. Men det sænker din kropstemperatur, da varmen går tabt gennem huden"
    },
    {
        question: "Alkohol kan påvirke din evne til at træffe beslutninger.",
        correctAnswer: true,
        explanation: "Alkohol påvirker hjernens funktioner og kan nedsætte din dømmekraft og beslutningstagning."
    },
    {
        question: "At drikke alkohol hjælper dig med at sove bedre",
        correctAnswer: false,
        explanation: "Alkohol kan hjælpe dig med at falde i søvn hurtigere, men det forstyrrer søvnkvaliteten og kan føre til en dårligere nats søvn."
    },
];

// Variabel til at holde styr på det aktuelle spørgsmål
let currentQuestionIndex = 0;

// Henter referencer til HTML-elementer
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const explanationElement = document.getElementById('explanation');
const retryButton = document.getElementById('retryButton');

// Funktion til at vise det aktuelle spørgsmål
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
}

// Funktion til at håndtere valg af svar
function selectAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    // Tjekker om svaret er korrekt og viser resultatet
    if (isTrue === currentQuestion.correctAnswer) {
        resultElement.innerText = "Rigtigt!";
    } else {
        resultElement.innerText = "Forkert!";
    }
    // Viser forklaringen på svaret
    explanationElement.innerText = currentQuestion.explanation;
    // Skjuler spørgsmålet og viser resultatet
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
}

// Funktion til at gå til næste spørgsmål
function nextQuestion() {
    currentQuestionIndex++;
    // Tjekker om der er flere spørgsmål
    if (currentQuestionIndex < questions.length) {
        // Skjuler resultatet og viser næste spørgsmål
        resultContainer.classList.add('hide');
        questionContainer.classList.remove('hide');
        showQuestion();
    } else {
        // Viser besked om at quizzen er færdig
        resultElement.innerText = "Du har gennemført quizzen!";
        explanationElement.innerText = "";
        // Skjuler knappen til næste spørgsmål
        document.querySelector('button[onclick="nextQuestion()"]').classList.add('hide');
        // Viser knappen til at starte quizzen igen
        retryButton.classList.remove('hide');
    }
}

// Funktion til at genstarte quizzen
function restartQuiz() {
    currentQuestionIndex = 0;
    // Skjuler resultatet og viser første spørgsmål
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    // Viser knappen til næste spørgsmål
    document.querySelector('button[onclick="nextQuestion()"]').classList.remove('hide');
    // Skjuler knappen til at starte quizzen igen
    retryButton.classList.add('hide');
    showQuestion();
}

// Viser første spørgsmål ved start
showQuestion();