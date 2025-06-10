const game=document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre : "CODING",
        questions : [
            {
                questions: "Which operator is used to assign values in Python?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What function is used to find the size of an array in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What type of loop is used when the number of iterations is unknown?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What function is used to compare two strings in C?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What method is used to add an item to a list in Python?",
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
                questions: "Which tag is used to make text bold in HTML?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What is the attribute for alternative text in <img>?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Which property controls overlapping in CSS?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Which attribute makes an input field mandatory?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "What property is used to set the text to uppercase in CSS?",
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
                questions: "which shortcut does ctrl+x perform?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "What is the full form of PDF",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "Who developed the first personal computer?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Who is known for the invention of ‘World Wide Web’?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which principle is used to measure the efficiency of algorithms?",
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
                questions: "What is the tallest mountain in the world?",
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
                questions: "Who painted the Mona Lisa?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "What is the capital of Nepal?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Who is known as the \"Father of Modern Economics\"?",
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
                questions: "What does \"OOTD\" stand for?",
                answers: ["     ","    "],
                correct: "     ",
                level: 1           },
            {
                questions: "Who won in the boxing match between Jake Paul and Mike Tyson?",
                answers: ["     ","    "],
                correct: "     ",
                level: 2
            },
            {
                questions: "What movie is famous for the line, “May the Force be with you”?",
                answers: ["     ","    "],
                correct: "     ",
                level: 3
            },
            {
                questions: "Who is the star character in \"Demon Slayer: Kimetsu no Yaiba\"?",
                answers: ["     ","    "],
                correct: "     ",
                level: 4
            },
            {
                questions: "Which fruit is known as the \"king of fruits\"?",
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

