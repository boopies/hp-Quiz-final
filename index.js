//The questinos for the quiz.
const STORE = [
    {question: 'Which spell disarms opponents?',
    options: [
        'Accio',
        'Imperio',
        'Protego',
        'Expelliarmus'
        ],
    correctAnswer: 'Expelliarmus'
    }, 
    {question: 'Which spell is the killing curse?',
    options: [
        'Avada Kadavra',
        'Impedimenta',
        'Lumos',
        'Nox'
        ],
    correctAnswer: 'Avada Kadavra'
    },
    {question: 'Which spell makes things bigger?',
    options: [
        'Aguamenti',
        'Engorgio',
        'Mobilicorpus',
        'Bombarda'
        ],
    correctAnswer: 'Engorgio'
    },
    {question: 'Which spell mutates peoples heads?',
    options: [
        'Stupefy',
        'Reparo',
        'Mutatio Skullus',
        'Imperio'
        ],
        correctAnswer: 'Mutatio Skullus'
    },
    {question: 'Which spell confuses people?',
    options: [
        'Colovaria',
        'Tarantallegra',
        'Confundus',
        'Serpensortia'
        ],
    correctAnswer: 'Confundus'
    },
    {question: 'Which spell lights things on fire?',
    options: [
        'Lumos',
        'Incendio',
        'Glacius',
        'Expelliarmus'
        ],
    correctAnswer: 'Incendio'
    },
    {question: 'Which spell causes objects to fly?',
    options: [
        'Wingardium Leviosa',
        'Impedimenta',
        'Crucio',
        'Obliviate'
        ],
    correctAnswer: 'Wingardium Leviosa'
    },
    {question: 'Which spell transforms objects into birds?',
    options: [
        'Avifors',
        'Ebublio',
        'Pullus',
        'Snufflifors'
        ],
    correctAnswer: 'Avifors'
    },
    {question: 'Which spell creates explosive things?',
    options: [
        'Bombarda',
        'Incendio',
        'Feindfire',
        'Confringo'
        ],
    correctAnswer: 'Confringo'
    },
    {question: 'Which spell fully paralyses a person?',
    options: [
        'Imperio',
        'Protego',
        'Petrificus Totalus',
        'Nox'
        ],
    correctAnswer: 'Petrificus Totalus'
    },
    {question: 'Which spell binds the tongue to stop taking?',
    options: [
        'Mimble Wimble',
        'Densaugeo',
        'Langlock',
        'Levicorpus'
        ],
    correctAnswer: 'Mimble Wimble'
    },
    {question: 'Which spell treats minor injuries?',
    options: [
        'Dittany',
        'Reparo',
        'Episkey',
        'Colloportus'
        ],
    correctAnswer: 'Episkey'
    },
    {question: 'Which spell destroys your memories?',
    options: [
        'Riddikulus',
        'Alohomora',
        'Expecto Patronum',
        'Obliviate'
        ],
    correctAnswer: 'Obliviate'
    }, 
]

//variables required
let currentScore = 0;
let scoreOutOf = 0;
let currentQuestion = 0;
let questionMarker = 1;

//This creates the first question on the page
function pullQuestion(){
    $('.js-quiz-form').append(`
        <div class="battle"> <img class="wandBattle" src="images/choose_answer.gif" alt="Choose Your Answer"> </div>
        <label class="hp-question">${STORE[currentQuestion].question}</label>
        <div class="hp-options">
        </div>`);
    let questionNow = STORE[currentQuestion];
    for(let i=0; i<questionNow.options.length; i++){
      $('.hp-options').append(`
          <input type ="radio" name="options" id="option${i+1}" value= "${questionNow.options[i]}" required> 
          <label for="option${i+1}" class="opt"> ${questionNow.options[i]}</label> <br/>
        `);};
    $('.js-quiz-form').append(`<button class="answerBut" type="submit">Submit</button>`);
}


//starts the quiz
function startQuiz() {
    $('.jsaquestion').text(STORE.length);
    $('.js-QuestionAndScore').hide();
    $('.js-questions').hide();
    $('js-response').hide();
    $('js-reset').hide();
    $('.startQuiz').click(function(event){
    $('.start_page').hide();
    $('.js-QuestionAndScore').show();
    $('.js-questions').show();
    pullQuestion();
    });
  }

  //update Score
function updateScore() {
    currentScore++;
    $('.jsscore').text(currentScore);
  }

//update the question number
function updateScoreOutOf() {
    scoreOutOf++;
    $('.js-current-question').text(scoreOutOf);
    $('.js-big-score').text(scoreOutOf);
  }

  //Loads correct Answer Screen
  function correctAnswer(){
    $('.js-response').append(`<div class="yayCorrect">
    <div class="correctImg"><img class="correctAnswer" src="images/Correct_Answer.gif" alt="You hit Voldemort"></div>
    <p class="textWelcome">Correct!<br/> 
    You dealt a mighty blow.</p>
    <p class="yourScore"> Your Score is <span class="js-big-score"> ${currentScore} </span>out of <span class="js-big-score">
    ${scoreOutOf}</span></p>
    <button type="button" class="nextButton">Next</button>
    </div>`);
}

//Loads wrong Answer Screen
function wrongAnswer(){
    $('.js-response').append(`
    <div class="noWrong">
    <div class="wrongImg"><img class="wrongAnswer" src="images/Wrong_Answer.gif" alt="Voldemort hit you"></div>
    <p class="textWelcome">Incorrect!<br/> 
    The correct answer was: <br/> <span class="right-answer">${STORE[currentQuestion].correctAnswer}</span></p>
    <p class="yourScore"> Your Score is <span class="js-big-score"> ${currentScore} </span>
    out of <span class="js-big-score"> ${scoreOutOf} </span></p>
    <button type="button" class="nextButton">Next</button>
    </div>`);
}


//answering questions on the quiz
function answerQuestions(){
    $('.js-quiz-form').on('click', '.answerBut', function(event) {
        event.preventDefault();
        $('.js-questions').hide();
        $('.js-response').show();
        let selected = $("input[name=options]:checked")
        let yourAnswer = selected.val();
        let correctCheck = STORE[currentQuestion].correctAnswer;
        if (yourAnswer === correctCheck) {
            $('.js-response').empty();
            updateScore();
            updateScoreOutOf();
            correctAnswer();
        } else {
            $('.js-response').empty();
            updateScoreOutOf();
            wrongAnswer();
      }
    });
}

//update the out of number
  function updateQuestionMarker() {
    questionMarker++;
    $('.jscquestion').text(questionMarker);
  }

  //update the current question
  function updateCurrentQuestion(){
    currentQuestion++
  }

function checkQuestions() {
    if (currentQuestion < STORE.length) {
    $('.js-quiz-form').empty();
    $('.js-response').hide();
    $('.js-questions').show();
      pullQuestion();
    } else {
      $('.js-response').hide();
      $('.js-reset').show();
      endPage();
    }
  }

//changes questions on the quiz
function nextQuestions(){
    $('.js-response').on('click', '.nextButton', function(event) {
        event.preventDefault();
        updateCurrentQuestion();
        updateQuestionMarker();
        $('.js-quiz-form').empty();
        checkQuestions() 
    });
}



//final Score Screen
function endPage(){
    $('.js-QuestionAndScore').hide();
    if (currentScore >= 6) { $('.js-reset').append(`<div class="youWin">
        <div class="wonImg"><img class="beatTR" src="images/you_pass.gif" alt="You defeted Tom Riddle"></div>
        <p class="yourScoreFinal"> Your Final Score is <span class="js-big-score"> ${currentScore} </span>
        out of <span class="js-big-score"> ${scoreOutOf} </span></p>
        <p class="looseText">You defeated Tom Riddle!</p>
        <button type="button" class="resetButton">Try Again</button>
        </div>`
    );} else {
        $('.js-reset').append(`<div class="youLoose">
        <div class="defeatedImg"><img class="defeatedByLV" src="images/Fail_Quiz.gif" alt="Voldemort got you"></div>
        <p class="yourScoreFinal"> Your Final Score is <span class="js-big-score"> ${currentScore} </span>
        out of <span class="js-big-score"> ${scoreOutOf} </span></p>
        <p class="looseText">You were defeated by Lord Voldemort.</p>
        <button type="button" class="resetButton">Try Again</button>
        </div>`
    );} 
}

//Reset Stats
function resetStats(){
    currentScore = 0;
    scoreOutOf = 0;
    currentQuestion = 0;
    questionMarker = 1;
    $('.jsscore').text(currentScore);
    $('.jscquestion').text(questionMarker);
}

//restarts quiz
function restartQuiz(){
    $('.js-reset').on('click', '.resetButton', function() {
        resetStats();
        $('.js-QuestionAndScore').hide();
        $('.js-questions').hide();
        $('.js-response').hide();
        $('.js-reset').hide();
        $('.js-quiz-form').empty();
        $('.js-response').empty();
        $('.js-reset').empty();
        $('.start_page').show();
    });
}

function activateQuizApp() {
    startQuiz();
    answerQuestions();
    nextQuestions();
    restartQuiz();
  }
  
  // when the page loads, call `activateQuizApp
  $(activateQuizApp);