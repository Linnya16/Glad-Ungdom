// Array med spørgsmål, svar og forklaringer til quizzen
const questions = [
    {
        question: "Alkohol er en stimulant.",
        correctAnswer: false,
        explanation: "Falsk. Alkohol er faktisk en depressant, ikke en stimulant."
    },
    {
        question: "Det er farligt at blande alkohol med energidrikke.",
        correctAnswer: true,
        explanation: "Sandt. At blande alkohol med energidrikke kan maskere virkningerne af alkohol og føre til overforbrug."
    },
    {
        question: "Alkoholindtag kan hjælpe med at forbedre din søvnkvalitet.",
        correctAnswer: false,
        explanation: "Falsk. Selvom alkohol kan hjælpe dig med at falde i søvn, forstyrrer det den dybe søvnfase og kan resultere i dårlig søvnkvalitet."
    },
    {
        question: "Alkohol kan påvirke din evne til at træffe beslutninger.",
        correctAnswer: true,
        explanation: "Sandt. Alkohol påvirker hjernens funktioner og kan nedsætte din dømmekraft og beslutningstagning."
    }
];

// Variabel til at holde styr på det aktuelle spørgsmål
let currentQuestionIndex = 0;

// Henter referencer til HTML-elementer
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const explanationElement = document.getElementById('explanation');

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
    showQuestion();
}

// Viser første spørgsmål ved start
showQuestion();