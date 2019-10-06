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
]

//variables required
let currentScore = 0;
let currentScoreOut = 0;
let currentQuestion = 0;
let questionCurrent = currentQuestion + 1;

//update Score
function updateScore() {
    currentScore++;
    $('.jsscore').text(currentScore);
  }

//update the question number
function updateQuestionScoreOut() {
    currentScoreOut++;
    $('.js-current-question').text(currentScoreOut);
    $('.js-big-score').text(currentScoreOut);
  }

//update the out of number
  function updateQuestionCurrent() {
    questionCurrent++;
    $('.jscquestion').text(questionCurrent);
  }

  function updateCurrentQuestion(){
    currentQuestion++
  }

//generates the list for Score and Questions
function generateQuestAndScoreList(){
    return `<ul class="qands">` + 
    `<li>Question ` +
    `<span class="jscquestion">`+
    questionCurrent + `</span> / ${STORE.length} </li>` +
    `<li>Score is <span class="jsscore">`+ currentScore +`</span>`+
    ` /<span class="js-big-score">` + currentScoreOut + `</span>`+
    `</li>`+
    `</ul>`;
}

  //shows Question and Score in DOM
  function showQuestionandScore(){
    const QuestAndScoreString = generateQuestAndScoreList();
    $('.js-QuestionAndScore').html(QuestAndScoreString);
  }

//This creates the first question on the page
function pullQuestion(){
    $('.js-quiz-form').append(`
        <div class="battle"> <img src="images/choose_answer.gif" alt="Choose Your Answer"> </div>
        <label id="hp-question">${STORE[currentQuestion].question}</label>
        <div class="hp-options">
        </div>`);
    let questionNow = STORE[currentQuestion];
    for(let i=0; i<questionNow.options.length; i++){
      $('.hp-options').append(`
          <input type ="radio" name="options" id="option${i+1}" value= "${questionNow.options[i]}" tabindex ="${i+1}" required> 
          <label for="option${i+1}" class="opt"> ${questionNow.options[i]}</label> <br/>
          <span id="js-r${i+1}"></span>`);};
    $('.js-quiz-form').append(`<button class="answerBut" type="submit">Submit</button>`);
}

//starts the quiz
function startQuiz() {
    $('.js-QuestionAndScore').hide();
    $('.js-questions').hide();
    $('js-response').hide();
    $('js-reset').hide();
    $('.startQuiz').click(function(event){
    $('.start_page').hide();
    $('.js-QuestionAndScore').show();
    $('.js-questions').show();
    showQuestionandScore();
    pullQuestion();
    });
  }


function checkQuestions() {
    if (currentQuestion < STORE.length) {
      return pullQuestion();
    } else {
      $('.js-response').hide();
      $('.s-reset').show();
      endPage();
    }
  }

//changes questions on the quiz
function changeQuestions(){
    $('.js-response').on('click', '.nextButton', function(event) {
        event.preventDefault();
        updateCurrentQuestion();
        $('.js-quiz-form').empty();
        checkQuestions() 
        $('.js-response').hide();
        $('.js-questions').show();
        updateQuestionCurrent();
    });
}

function correctAnswer(){
    $('.js-response').append(`<div class="yayCorrect">
    <div class="correctImg"><img class="correctAnswer" src="images/Correct_Answer.gif" alt="You got Voldemort"></div>
    <p class="textWelcome">Correct! <br> You dealt a mighty blow.</p>
    <p class="yourScore"> Your Score is <span class="js-big-score">`+ currentScore +`</span>`+
    ` out of <span class="js-big-score">` + currentScoreOut + `</span></p>`+
    `<button type="submit" class="nextButton">Next</button>
    </div>`);
}

function wrongAnswer(){
    $('.js-response').append(`
    <div class="noWrong">
    <div class="wrongImg"><img class="wrongAnswer" src="images/Wrong_Answer.gif" alt="Voldemort got you"></div>
    <p class="textWelcome">Incorrect! <br> He got you good.</p>
    <p class="yourScore"> Your Score is <span class="js-big-score">`+ currentScore +`</span>`+
    ` out of <span class="js-big-score">` + currentScoreOut + `</span></p>
    <button type="submit" class="nextButton"> Next</button>
    </div>`);
}

//answering questions on the quiz
function answerQuestions(){
    $('.js-quiz-form').on('click', '.answerBut', function(event) {
        event.preventDefault();
        $('.js-questions').hide();
        $('.js-response').show();
        let selected = $("input[name=options]:checked")
        let answer = selected.val();
        let checked = STORE[currentQuestion].correctAnswer;
        if (answer === checked) {
            $('.js-response').empty();
            updateScore();
            updateQuestionScoreOut();
            correctAnswer();
        } else {
            $('.js-response').empty();
            updateQuestionScoreOut();
            wrongAnswer();
      }
    });
}


//final Score Screen
function endPage(){
    if (currentScore >= 6) { $('.js-reset').append(`<div class="youWin">
    <div class="wonImg"><img class="beatTR" src="images/you_pass.gif" alt="You defeted Tom Riddle"></div>
    <p class="yourScore"> Your Final Score is <span class="js-big-score">`+ currentScore +`</span>`+
    ` out of <span class="js-big-score">` + currentScoreOut + `</span></p>
    <p class="looseText">You defeated Tom Riddle!</p>
    <button type="submit" class="resetButton">Reset</button>
    </div>`
    );}
    else {
        $('.js-reset').append(`<div class="youLoose">
        <div class="defeatedImg"><img class="defeatedByLV" src="images/Fail_Quiz.gif" alt="Voldemort got you"></div>
        <p class="yourScore"> Your Final Score is <span class="js-big-score">`+ currentScore +`</span>`+
        ` out of <span class="js-big-score">` + currentScoreOut + `</span></p>
        <p class="looseText">You were defeated by Lord Voldemort.</p>
        <button type="submit" class="resetButton">Reset</button>
        </div>`
    );} 
}

//Reset Stats
function resetStats(){
    questionCurrent = 1;
    currentScore = 0;
    currentScoreOut = 0;
    currentQuestion = 0;
}

//restarts quiz
function restartQuiz(){
    $('.js-reset').on('click', '.resetButton', function(event) {
        event.preventDefault();
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
    changeQuestions();
    answerQuestions();
    restartQuiz();
  }
  
  // when the page loads, call `activateQuizApp
  $(activateQuizApp);