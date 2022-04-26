const Q = document.querySelector(".question");
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const button4 = document.querySelector(".btn-4");
const gameQuestions = [];
const buttonClicked = [];
const buttonArray = [button1, button2, button3, button4];
let score = 0;
let currentQuestion = 0;




//Game questions and answers
let questions = [
  ["What was the original model name for the Porsche 911?"],
  ["In what year did the company make its first vehicle?"],
  ["How many victories does Porsche have at LeMans?"],
  ["What type of engine does the Porsche 911 have?"],
  ["Porsche is the worlds largest manufacturer of What?"],
  ["What country is Porsche from?"],
  ["What is the top of the line 911 model name?"],
  ["What company owns Porsche?"],
  ["What animal is on the Porsche Crest?"],
  ["What is the name of Porsche's first SUV?"],
];

let options = [
  ["900", "901", "912", "beetle"],
  ["1936", "1955", "1944", "1948"],
  ["8", "28", "4", "19"],
  ["V8", "V12", "Flat 6", "4 cylinder"],
  ["Engines", "Racecars", "SUVs", "Sportscars"],
  ["Germany", "France", "Italy", "USA"],
  ["Carrera 4S", "911 Turbo", "GT2 RS", "911 Turbo S"],
  ["Volkswagen", "Ferrari", "Ford", "Mercedes"],
  ["Eagle", "Lion", "Prancing Horse", "Bat"],
  ["Macan", "Cayenne", "Taycan", "Panamera"],
];

//Game start and functionanlity  
function popQ() {
  if (currentQuestion === 0) {
    Q.innerHTML = questions[0];
    button1.innerHTML = options[0][0];
    button2.innerHTML = options[0][1];
    button3.innerHTML = options[0][2];
    button4.innerHTML = options[0][3];
  
    button3.addEventListener("click", handleEvent0)
    function handleEvent0() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 1) {
    Q.innerHTML = questions[1];
    button1.innerHTML = options[1][0];
    button2.innerHTML = options[1][1];
    button3.innerHTML = options[1][2];
    button4.innerHTML = options[1][3];

    button3.addEventListener("click", handleEvent1)
    function handleEvent1() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;

  }
  else if (currentQuestion === 2) {
    Q.innerHTML = questions[2];
    button1.innerHTML = options[2][0];
    button2.innerHTML = options[2][1];
    button3.innerHTML = options[2][2];
    button4.innerHTML = options[2][3];

    button4.addEventListener("click", handleEvent2)
    function handleEvent2() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 3) {
    Q.innerHTML = questions[3];
    button1.innerHTML = options[3][0];
    button2.innerHTML = options[3][1];
    button3.innerHTML = options[3][2];
    button4.innerHTML = options[3][3];

    button3.addEventListener("click", handleEvent3)
    function handleEvent3() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 4) {
    Q.innerHTML = questions[4];
    button1.innerHTML = options[4][0];
    button2.innerHTML = options[4][1];
    button3.innerHTML = options[4][2];
    button4.innerHTML = options[4][3];

    button2.addEventListener("click", handleEvent4)
    function handleEvent4() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 5) {
    Q.innerHTML = questions[5];
    button1.innerHTML = options[5][0];
    button2.innerHTML = options[5][1];
    button3.innerHTML = options[5][2];
    button4.innerHTML = options[5][3];

    button1.addEventListener("click", handleEvent5)
    function handleEvent5() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 6) {
    Q.innerHTML = questions[6];
    button1.innerHTML = options[6][0];
    button2.innerHTML = options[6][1];
    button3.innerHTML = options[6][2];
    button4.innerHTML = options[6][3];

    button1.addEventListener("click", handleEvent6)
    function handleEvent6() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 7) {
    Q.innerHTML = questions[7];
    button1.innerHTML = options[7][0];
    button2.innerHTML = options[7][1];
    button3.innerHTML = options[7][2];
    button4.innerHTML = options[7][3];

    button3.addEventListener("click", handleEvent7)
    function handleEvent7() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 8) {
    Q.innerHTML = questions[8];
    button1.innerHTML = options[8][0];
    button2.innerHTML = options[8][1];
    button3.innerHTML = options[8][2];
    button4.innerHTML = options[8][3];

    button1.addEventListener("click", handleEvent8)
    function handleEvent8() {  
      alert("Correct!"); score += 1;
    }
    currentQuestion += 1;
  }
  else if (currentQuestion === 9) {
    Q.innerHTML = questions[9];
    button1.innerHTML = options[9][0];
    button2.innerHTML = options[9][1];
    button3.innerHTML = options[9][2];
    button4.innerHTML = options[9][3];

    button2.addEventListener("click", handleEvent9)
    function handleEvent9() {  
      alert(`Correct, end of quiz! score: ${score}`); score += 1;
    }
  }
}

//Event listeners on buttons
button1.addEventListener("click", popQ);
button2.addEventListener("click", popQ);
button3.addEventListener("click", popQ);
button4.addEventListener("click", popQ);

// currentQuestion +1;

// calling game start function 
popQ();

 




