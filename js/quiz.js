const quizData = [
    {
        question: "Quelle langue s'exécute dans un navigateur Web ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Que signifie CSS ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Que signifie HTML ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "En quelle année JavaScript a été lancé ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Comment sélectionnez-vous des éléments avec le nom de classe 'test' ?",
        a: "#test ",
        b: ".test  ",
        c: "test",
        d: "*test",
        correct: "b",
    },
    {
        question: "Où dans un document HTML est le bon endroit pour faire référence à une feuille de style externe ?",
        a: "In the <head> section  ",
        b: "In the <body> section",
        c: "At the end of the document",
        correct: "a ",
    },
    {
        question: "Quel attribut HTML est utilisé pour définir les styles en ligne ?",
        a: "styles  ",
        b: "font",
        c: "class",
        d: "style  ",
        correct: "d",
    },
    {
        question: "Quelle est la bonne syntaxe CSS ?",
        a: "body:color=black;  ",
        b: "{body:color=black;}",
        c: "{body;color:black;}",
        d: "body {color: black;}  ",
        correct: "d",
    },
    {
        question: "Comment insérer un commentaire dans un fichier CSS ?",
        a: "// this is a comment  ",
        b: "// this is a comment //",
        c: "/* this is a comment */  ",
        d: "' this is a comment",
        correct: "c",
    },
    {
        question: "Quelle propriété CSS contrôle la taille du texte ?",
        a: "text-size",
        b: "font-size  ",
        c: "font-style",
        d: "text-style",
        correct: "b",
    },
    {
        question: "Quelle est la valeur par défaut de la propriété position ?",
        a: "static    ",
        b: "absolute",
        c: "fixed ",
        d: "relative",
        correct: "a  ",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Recharger</button>
           `
       }
    }
})
