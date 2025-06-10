const game=document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre : "CODING",
        questions : [
            {
                questions: "Which operator is used for addition in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What function is used to read input in C++?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is used to exit a loop prematurely in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which function is used to allocate memory dynamically in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which sorting algorithm has the best average case time complexity?",
               answers: ["     ","    "],
                correct: "     ",
                level: 5
            },
        ],
    },
    {
        genre : "HTML\\ CSS",
        questions : [
            {
                questions: "What does HTML stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "How do you define a table row in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which tag defines a dropdown list in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which attribute in &lt;a&gt; specifies where to open the link?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "which tag is used to embed another document within the current HTML document?",
                answers: ["     ","    "],
                correct: "     ",
                level: 5
            },
        ],
    },
    {
        genre : "COMPUTER IQ",
        questions : [
            {
                questions: "What does GB stand for in the world of computers?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Linux is an example of what type of software?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "In the computer memory hierarchy, which is the fastest memory type?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Common protocol for email transmission?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which company launched the first public cloud service?",
                answers: ["     ","    "],
                correct: "     ",
                level: 5
            },
        ],
    },
    {
        genre : "GK",
        questions : [
            {
                questions: "What is the capital of France?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What is the largest planet in our solar system?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Who was the first president of the United States?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which state in India is known as the \"Land of Five Rivers\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the pH value of pure water?",
                answers: ["     ","    "],
                correct: "     ",
                level: 5
            },
        ],
    },
    {
        genre : "RANDOM",
        questions : [
            {
                questions: "What does \"BRB\" stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Which Indian influencer gained fame for their chai stall and for meeting Bill Gates?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "\"chin tapak dum dum\" is a dialouge from which indian cartoon?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which popular YouTube trend involves eating large quantities of food?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which dance form is a night-long dance and drama performance practiced in Mangalore?",
                answers: ["     ","    "],
                correct: "     ",
                level: 5
            },
        ],
    },
]











let score = 0

function addCategory(category){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question =>{
        const card=document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if(question.level === 1){
            card.innerHTML = 100
        }
        if(question.level === 2){
            card.innerHTML = 200   
        }
        if(question.level === 3){
            card.innerHTML = 300   
        }
        if(question.level === 4){
            card.innerHTML = 400   
        }
        if(question.level === 5){
            card.innerHTML = 500   
        }

        card.setAttribute('data-question',question.questions)
        card.setAttribute('data-answer-1',question.answers[0])
        card.setAttribute('data-answer-2',question.answers[1])
        card.setAttribute('data-correct',question.correct)
        card.setAttribute('data-value',card.innerHTML)

        card.addEventListener('click', flipcard)
    })
    
}

jeopardyCategories.forEach(category => addCategory(category))

function flipcard(){
    this.style.position = "fixed";
    this.style.top = "0";
    this.style.left = "0";
    this.style.width = "100%";
    this.style.height = "100%";
    this.style.backgroundColor = "blue";
    this.style.zIndex = "9990";
    this.innerHTML=""
    this.style.fontSize="40px"
    this.style.lineHeight=""
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML=this.getAttribute('data-question')
    
    textDisplay.style.position = "absolute";
    textDisplay.style.left = "50%"; 
    textDisplay.style.top = "50%"; 
    textDisplay.style.transform = "translate(-50%, -50%)";
    textDisplay.style.fontSize = "80px"; 

    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML=this.getAttribute('data-answer-1')
    secondButton.innerHTML=this.getAttribute('data-answer-2')
    firstButton.addEventListener('click',getResult)
    secondButton.addEventListener('click',getResult)

    firstButton.style.position = "fixed"; // Absolute positioning for buttons
    secondButton.style.position = "fixed"; // Absolute positioning for buttons
    firstButton.style.bottom = "2%"; // Distance from the bottom of the screen
    secondButton.style.bottom = "2%"; // Distance from the bottom of the screen
    firstButton.style.right = "50px"; // Distance from the right side of the screen
    secondButton.style.right = "20px"; 


    this.append(textDisplay, firstButton, secondButton)

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click',flipcard))
}

function getResult(){
    const allCards=Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click',flipcard))

    const cardOfButton = this.parentElement

    if(cardOfButton.getAttribute('data-correct')==this.innerHTML){
        newscore = parseInt(cardOfButton.getAttribute('data-value'))
        score = score + newscore
        scoreDisplay.innerHTML=score
        cardOfButton.classList.add('correct-answer')
        
        setTimeout(() => {
            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML=cardOfButton.getAttribute('data-value')

            cardOfButton.style.position = "relative"; // Reset position
            cardOfButton.style.width = "initial"; // Reset width
            cardOfButton.style.height = "initial"; // Reset height
            cardOfButton.style.backgroundColor = ""; // Reset background color
            cardOfButton.style.zIndex = ""; // Reset z-index

        }, 100)
    }else{
        newscore = parseInt(cardOfButton.getAttribute('data-value'))
        score = score - newscore/4
        scoreDisplay.innerHTML=score
        cardOfButton.classList.add('wrong-answer')
        
        setTimeout(() => {
            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML= -newscore/4

            cardOfButton.style.position = "relative"; // Reset position
            cardOfButton.style.width = "initial"; // Reset width
            cardOfButton.style.height = "initial"; // Reset height
            cardOfButton.style.backgroundColor = ""; // Reset background color
            cardOfButton.style.zIndex = ""; // Reset z-index
        }, 100)
    }
    cardOfButton.removeEventListener('click',flipcard)
}

