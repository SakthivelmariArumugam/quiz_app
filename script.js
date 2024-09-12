const questions=[
  {
    question:"What is the largest lake in the world?",
    answers:[
      { text:"Caspian Sea",correct:false},
      { text:"Baikal",correct:true},
      { text:"Lake Superior",correct:false},
      { text:"Ontario",correct:false}
    ]
  },
  {
    question:"Which planet in the solar system is known as the “Red Planet”?",
    answers:[
      { text:"Venus",correct:false},
      { text:"Earth",correct:false},
      { text:"Mars",correct:true},
      { text:"Jupiter",correct:false}
    ]
  },
  {
    question:"What is the capital of Japan?",
    answers:[
      { text:"Beijing",correct:false},
      { text:"Tokyo",correct:true},
      { text:"Seoul",correct:false},
      { text:"Bangkok",correct:false}
    ]
  },
  {
    question:"Which river is the longest in the world?",
    answers:[
      { text:"Amazon",correct:false},
      { text:"Mississippi",correct:false},
      { text:"Nile",correct:true},
      { text:"Yangtze",correct:false}
    ]
  },
  {
    question:"What animal is the national symbol of Australia?",
    answers:[
      { text:"Kangaroo",correct:true},
      { text:"Koala",correct:false},
      { text:"Emur",correct:false},
      { text:"Crocodile",correct:false}
    ]
  },
  {
    question:"What chemical element is designated as “Hg”?",
    answers:[
      { text:"Silver",correct:false},
      { text:"Tin",correct:false},
      { text:"Copper",correct:false},
      { text:"Mercury",correct:true}
    ]
  },
  {
    question:"In what year was the first international modern Olympiad held?",
    answers:[
      { text:"1896",correct:true},
      { text:"1900",correct:false},
      { text:"1912",correct:false},
      { text:"1924",correct:false}
    ]
  },
  {
    question:"Which one is the hottest continent?",
    answers:[
      { text:"Africa",correct:true},
      { text:"South Asia",correct:false},
      { text:"North America",correct:false},
      { text:"Australia",correct:false}
    ]
  },
  {
    question:"What is the largest lake in the world?",
    answers:[
      { text:"Caspian Sea",correct:false},
      { text:"Baikal",correct:true},
      { text:"Lake Superior",correct:false},
      { text:"Ontario",correct:false}
    ]
  },
  {
    question:"What is the largest lake in the world?",
    answers:[
      { text:"Caspian Sea",correct:false},
      { text:"Baikal",correct:true},
      { text:"Lake Superior",correct:false},
      { text:"Ontario",correct:false}
    ]
  },
];
const questionElement=document.getElementById("question");
const answerButtons = document.getElementById("answers-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+" "+currentQuestion.question;
  currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct)
    {
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
   
  });
}
function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild)
  {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e)
{
  const selectedBtn=e.target;
  const isCorrect= selectedBtn.dataset.correct === "true";
  if(isCorrect)
  {
    selectedBtn.classList.add("correct");
    score++;
  }
  else
  {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}
function showScore()
{
  resetScore();
  questionElement.innerHTML='You Scored ${score} out of ${questions.length}';
}
function handleNextButton()
{
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length)
{
  showQuestion();
}
else
{
  showScore();
}
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length)
  {
    handleNextButton();
  }
  else
  {
    startQuiz();
  }
})
startQuiz();