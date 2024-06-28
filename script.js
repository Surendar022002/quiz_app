const questions = [
    {
        question : 'Which of the following is not a JavaScript data type?',
        answers : [
            {text : 'String', correct : false},
            {text : 'Boolean', correct : false},
            {text : 'Float', correct : true},
            {text : 'Object', correct : false},
        ]
    },
    {
        question : 'What is the purpose of the this keyword in JavaScript?',
        answers : [
            {text : 'It refers to the current function', correct : false},
            {text : 'It refers to the current object', correct : true},
            {text : 'It is used for comments', correct : false},
            {text : 'It refers to the parent object', correct : false},
        ]
    },
    {
        question : 'Which of the following is not a CSS box model property?',
        answers : [
            {text : 'margin', correct : false},
            {text : 'padding', correct : false},
            {text : 'border-radius', correct : false},
            {text : 'border-collapse', correct : true},
        ]
    },
    {
        question : 'Which of the following is not a valid way to declare a function in JavaScript?',
        answers : [
            {text : 'myFunction function() {}', correct : false},
            {text : 'let myFunction = function() {}', correct : false},
            {text : 'function myFunction() {}', correct : true},
            {text : 'const myFunction = () => {};', correct : false},
        ]
    },
    {
        question : 'Which of the following is a client site language?',
        answers : [
            {text : 'Java', correct : false},
            {text : 'C', correct : false},
            {text : 'Python', correct : false},
            {text : 'JavaScript', correct : true},
        ]
    },
    {
        question : 'What does HTML stand for?',
        answers : [
            {text : 'Hypertext Markup Language', correct : true},
            {text : 'Cascading Style Sheet', correct : false},
            {text : 'Jason Object Notation', correct : false},
            {text : 'Helicopters Terminals Motorboats Lamborginis', correct : false},
        ]
    },
    {
        question : 'What does CSS stand for?',
        answers : [
            {text : 'Hypertext Markup Language', correct : false},
            {text : 'Cascading Style Sheet', correct : true},
            {text : 'Jason Object Notation', correct : false},
            {text : 'Helicopters Terminals Motorboats Lamborginis', correct : false},
        ]
    },
];

const quesElement = document.getElementById('questions');
const answerBtn = document.getElementById('answer-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0
let score = 0

function startQuiz(){ 
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next'
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quesElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct')
        score++;
    }
    else[
        selectBtn.classList.add('incorrect')
    ]
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextBtn.style.display = 'block';
}

function showScore(){
    resetState()
    quesElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
})

startQuiz();