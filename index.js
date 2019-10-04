

//The questinos for the quiz.
const STORE = [
    {question: 'Which spell disarms opponents?',
    options: [
        'Accio',
        'Imperio',
        'Protego',
        'Expelliarmus'
        ],
    correctAnwser: "Expelliarmus"
    }, 
    {question: 'Which spell is the killing curse?',
    options: [
        'Avada Kadavra',
        'Impedimenta',
        'Lumos',
        'Nox'
        ],
    correctAnwser: "Avada Kadavra"
    },
    {question: 'Which spell makes things bigger?',
    options: [
        'Aguamenti',
        'Engorgio',
        'Mobilicorpus',
        'Bombarda'
        ],
    correctAnwser: "Engorgio"
    },
    {question: 'Which spell mutates peoples heads??',
    options: [
        'Stupefy',
        'Reparo',
        'Mutatio Skullus',
        'Imperio'
        ],
    correctAnwser: "Mutatio Skullus"
    },
    {question: 'Which spell confuses people?',
    options: [
        'Colovaria',
        'Tarantallegra',
        'Confundus',
        'Serpensortia'
        ],
    correctAnwser: "Confundus"
    },
    {question: 'Which spell lights things on fire?',
    options: [
        'Lumos',
        'Incendio',
        'Glacius',
        'Expelliarmus'
        ],
    correctAnswer: "Incendio"
    },
    {question: 'Which spell causes objects to fly?',
    options: [
        'Wingardium Leviosa',
        'Impedimenta',
        'Crucio',
        'Obliviate'
        ],
    correctAnswer: "Wingardium Leviosa"
    },
    {question: 'Which spell transforms objects into birds?',
    options: [
        'Avifors',
        'Ebublio',
        'Pullus',
        'Snufflifors'
        ],
    correctAnswer: "Avifors"
    },
    {question: 'Which spell creates explodes things?',
    options: [
        'Bombarda',
        'Incendio',
        'Feindfire',
        'Confringo'
        ],
    correctAnswer: "Confringo"
    },
    {question: 'Which spell fully paralyses a person?',
    options: [
        'Imperio',
        'Protego',
        'Petrificus Totalus',
        'Nox'
        ],
    correctAnswer: "Petrificus Totalus"
    },
    {question: 'Which spell binds the tongue to stop taking?',
    options: [
        'Mimble Wimble',
        'Densaugeo',
        'Langlock',
        'Levicorpus'
        ],
    correctAnswer: "Mimble Wimble"
    },
    {question: 'Which spell treats minor injuries?',
    options: [
        'Dittany',
        'Reparo',
        'Episkey',
        'Colloportus'
        ],
    correctAnswer: "Episkey"
    },
]

//generates the list for Score and Questions
function generateQuestAndScoreList(){
    console.log('Questions and Score added')
    return `<ul class="qands">` + 
    `<li>Question ` +
    `<span class="js-current-question">`+
    `0</span>/12</li>` +
    `<li>Score is <span class="jsscore">0</span>`+
    ` out of <span class="js-current-question">0</span>`+
    `</li>`+
    `</ul>`;
}

  //shows Question and Score in DOM
  function showQuestionandScore(){
    console.log('showing score and questions');
    const QuestAndScoreString = generateQuestAndScoreList();
    $('.js-QuestionAndScore').html(QuestAndScoreString);
  }

//generates the form

function generateFirstQuestion(){
    console.log('First Question Appears')
    return `
    <form id="js-quiz-form">
        <div> <img src="images/choose_answer.gif" alt="Choose Your Answer"> </div>
        <label class="hp-question"> What is this? </label>
            <label class="choice"><input type="radio" name="option" value="option 1" checked> option 1</label>
            <label class="choice"><input type="radio" name="option" value="option 2"> option 2</label>
            <label class="choice"><input type="radio" name="option" value="option 3"> option 3 </label>
            <label class="choice"><input type="radio" name="option" value="option 4"> option 4  </label>                 
        <button class="answerbut" type="submit">Submit</button>
    </form>`
}
  //This creates the first question on the page
function pullFirstQuestion(questionIndex) {
    const questionMaker = generateFirstQuestion();
    $('.js-questions').html(questionMaker);
}

//starts the quiz
function startQuiz() {
    $('.start').on('click', function(event){
    console.log("starting Quiz");
    $('.start_page').hide();
    $('.js-QuestionAndScore').show();
    $('.js-questions').show();
    showQuestionandScore();
    pullFirstQuestion();
    }
    );
  }


//changes questions on the quiz
function changeQuestions(){

}

//answering questions on the quiz
function answeringQuestions(){


}

//restarts quiz
function restartQuiz(){


}


  function activateQuizApp() {
    startQuiz();
    changeQuestions();
    answeringQuestions();
    restartQuiz();
  }
  
  $(activateQuizApp);