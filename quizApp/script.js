const quizData =[
    {
        question: 'Who was the first president of the United States of America?',
        a: 'John Fitzgerald Kennedy',
        b: 'George Washington',
        c: 'Abraham Lincoln',
        d: 'Theodore Roosevelt',
        correct: 'b'

    },{
        question: 'When was the Declaration of Independance signed?',
        a: 'July 14, 1780', 
        b: 'November 3, 1730',
        c: 'August 2, 1776',
        d: 'October 7, 1988',
        correct: 'c'
    },{
        question: 'Who signed the Emancipation Proclamation?',
        a: 'George Washinton',
        b: 'Thomas Jefferson',
        c: 'Franklin Delano Roosevelt',
        d: 'Abraham Lincoln',
        correct: 'd'
    },{
        question: 'Who signed the Land Revision Act of 1891?',
        a: 'Donald Trump',
        b: 'Lyndon Baines Johnson',
        c: 'Franklin Pierce',
        d: 'Benjamin Harrison',
        correct: 'd'
    },{
        question: 'Who led the United States into the Korean War?',
        a: 'Harry S Truman',
        b: 'Barack Obama',
        c: 'James Buchanan',
        d: 'Millard Fillmore',
        correct: 'a'
    },{
        question: 'What did Harry S Truman\'s middle initial stand for?',
        a: 'Salvador',
        b: 'Nothing',
        c: 'Shipp',
        d: 'Solomon',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
loadQuiz();


function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;



}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        
    });
    
}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
        };
    }

});





