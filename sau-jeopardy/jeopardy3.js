const game=document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre : "CODING",
        questions : [
            {
                questions: "What data type is used for storing integer numbers?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What function is used to output data to the console in C++?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the default access modifier in C++?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the size of a long integer in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the term for resolving method calls at runtime?",
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
                questions: "Which tag is used to insert a line break in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "How do you create an ordered list in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which tag is used to represent a definition list in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the full form of 'href'?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the default value of the position property in CSS?",
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
                questions: "What does WWW stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Total number of function keys in a keyboard",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the main component of a computer's CPU that performs calculations?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "First computer bug?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Who is Known as the father of AI?",
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
                questions: "Which planet is known as the Red Planet?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Who was the first person to walk on the Moon?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the largest desert in the world?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the capital city of Canada?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which Indian state is the largest producer of cotton?",
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
                questions: "What does \"LOL\" stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Name the Ex C.M. of Karntaka who recently passed away.",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which Indian singer is famous for songs like \"Channa Mereya\" and \"Ae Dil Hai Mushkil\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the name of the fictional country in the movie \"Black Panther\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What 2017 song by Luis Fonsi and Daddy Yankee became a global hit?",
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

