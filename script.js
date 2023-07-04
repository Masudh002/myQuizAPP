const   quiz_questions = [
    {
        question:"1. What is the city located in the coast region of Kenya?",
        choices:["Kisumu","Mombasa","Nairobi","Non of the above"],
        answer:"Mombasa"
    },
    {
        question:"2. What is the name of the best beach located in the south-coast region of Kenya?",
        choices:["Nyali Beach","Watamu","Diani","Zanzibar"],
        answer:"Diani"
    },
    {
        question:"3. Which one of the following counties is not found in the coast Region of Kenya?",
        choices:["Kwale","Mombasa","Garissa","Kilifi"],
        answer:"Garissa"
    },
    {
        question:"4. Which is the leading Port in Kenya?",
        choices:["Kisumu Port","Mombasa Port","Naivasha Inland Cointainer Depot","Lamu Port"],
        answer:"Mombasa Port"
    },
    {
        question:"5. Which is the most populated county in the Coast Region of Kenya",
        choices:["Kwale","Kilifi","Mombasa","Taita-Taveta"],
        answer:"Mombasa"
    }
];

let currentQuestion = 0;
let score = 0;
let timeRemaining = 30;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const startAgain = document.getElementById("start-again");
const timerElement = document.getElementById("timer");

// Function to load the current question and choices
const loadQuestion = () => {
    const question = quiz_questions[currentQuestion];
    questionElement.textContent = question.question;  
   
    // Clear the previous choices
    choicesElement.innerHTML = "";
  // Create the choice buttons
  for (let i = 0; i < question.choices.length; i++) {
    const choice = question.choices[i];
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = choice;
    li.appendChild(button);
    choicesElement.appendChild(li);
    
    // Add event listener to handle choice selection
    button.addEventListener("click", handleChoiceSelection);
  }
  startAgain.style.display = "none";

}    

// Function to handle the choice selection
function handleChoiceSelection(event) {
    const selectedChoice = event.target.textContent;
    const question = quiz_questions[currentQuestion];
  
    if (selectedChoice === question.answer) {
      score++;
    }
  
    // Move to the next question
   currentQuestion++;
  
    // Check if quiz is completed
    if (currentQuestion === quiz_questions.length) {
      endQuiz();
    } else {
      loadQuestion();
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
  
    // Display the final score
    questionElement.textContent = `Quiz Completed! Your score is ${score}/${quiz_questions.length}`;
    choicesElement.innerHTML = "";
    submitButton.style.display= "none";
    startAgain.style.display = "inline-block";

    
    
  }
  
  
  // Function to update the timer
  function updateTimer() {
    timeRemaining--;
  
    if (timeRemaining <= 0) {
      endQuiz();
      timerElement.textContent = "Time's up!";
    } else {
      timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
    }
  }
  
  // Function to start the quiz again after completion
  function doAgain(){
    currentQuestion = 0;
    score = 0 ;
    timeRemaining = 31;
    loadQuestion();
     timerInterval = setInterval(updateTimer, 1000);
  }
  // Load the first question
  loadQuestion();

  //Starting again
  doAgain();
  

  
  // Add event listener
  submitButton.addEventListener("click", handleChoiceSelection);
  startAgain.addEventListener("click",doAgain );

 
  