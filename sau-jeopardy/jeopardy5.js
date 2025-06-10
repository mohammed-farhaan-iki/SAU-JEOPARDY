const game=document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre : "CODING",
        questions : [
            {
                questions: "Which function is used to read input from the user in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Which operator is used to compare two values in Python?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What type of loop is used for a fixed number of iterations in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the output of print(2 ** 3) in Python?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What header file is required to use fopen in C?",
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
                questions: "Which tag is used to create a paragraph in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "How do you create an unordered list in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What does the colspan attribute do in tables?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which tag is used to make text bold in HTML instead of <b> tag?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which CSS properties is used to control the spacing between letters in a text?",
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
                questions: "Mark Zuckerberg is the owner of?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What is the full form of \"HTTP\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is a popular open-source database management system?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the name of Amazon’s cloud computing storage service?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What does \"Wi-Fi\" stand for?",
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
                questions: "Which animal is known as the King of the Jungle?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Which ocean is the largest?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the chemical symbol for silver?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the scientific name of the human species?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the name of the first successful Indian satellite launched in space?",
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
                questions: "What does \"DM\" stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What’s the name of the CEO of Tesla?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which YouTuber is known for recreating real-life Squid Games?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which anime features the characters Goku, Vegeta, and Frieza?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the largest island in the world?",
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

