const quizData = [
    {
        question: "Which data structure uses FIFO (First In First Out)?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    },
    {
        question: "Which language is mainly used for web page structure?",
        answers: [
            { text: "CSS", correct: false },
            { text: "HTML", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Process Unit", correct: false },
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Processor Utility", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "int", correct: false },
            { text: "define", correct: false },
            { text: "dim", correct: false },
            { text: "let", correct: true }
        ]
    },
    {
        question: "Which data type is used to store true/false values?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: true },
            { text: "Array", correct: false }
        ]
    }
]

const questionElement = document.querySelector("#questions")
const answerBtns = document.querySelector("#answer-button")
const nextBtn = document.querySelector("#next-btn")


let currentQuestionIndex = 0
let score = 0

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score += 1
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }

        button.disabled = true
    })

    nextBtn.style.display = "block"
    currentQuestionIndex += 1
}

function resetState() {
    nextBtn.style.display = "none"
    nextBtn.innerHTML = "Next"
    questionElement.innerHTML = ""
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function showQuestion() {

    resetState()

    if (currentQuestionIndex === 5) {
        questionElement.appendChild(document.createTextNode("Your score is : " + score))
        nextBtn.innerHTML = "Restart"
        nextBtn.style.display = "block"
        currentQuestionIndex = 0
        score = 0
        return
    }

    let currentQuestion = quizData[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1

    questionElement.appendChild(document.createTextNode(questionNo + ". " + currentQuestion.question))

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.appendChild(document.createTextNode(answer.text))
        button.classList.add("btn")
        answerBtns.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextBtn.appendChild(document.createTextNode("Next"))
    showQuestion()
}

startQuiz()

function nextQuestion() {
    showQuestion()
}

nextBtn.addEventListener("click", nextQuestion)