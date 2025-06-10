const game=document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre : "CODING",
        questions : [
            {
                questions: "What function is used to print output in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "How do you declare a constant in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is used to access class members in C++?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "scanf() is a predefined function of which header file?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the result of sizeof('A') in C?",
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
                questions: "What tag is used for giving titles in a HTML document?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "what is &lt;a&gt; tag called as?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which tag links CSS in the <head> section?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which tag is used for drawing graphics in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What CSS property makes text go bold?",
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
                questions: "What do you call a portable computer?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What does ISP stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "In the field of information and communication technology, what is the full form of FDD?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Device that connects a local network to the internet?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What is the full form of SSH?",
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
                questions: "Who is the author of \"Harry Potter\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What is the capital of Japan?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the chemical symbol for gold?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "In which year did India become a republic? ",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "How many moons does the planet saturn have?",
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
                questions: "What type of animal was in the \"Ceiling Cat\" meme?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Who is known as the \"King of Bollywood\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What is the name of our Vice Chancellor?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "In which language is the song Taambdi Chaamdi?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What clothing brand’s logo features a small green crocodile?",
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
    this.style.lineHeight="120px"
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

