import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
// 이미지태그를 선택한다
const choice1El = document.querySelector('.choiceImg1')
const choice2El = document.querySelector('.choiceImg2')

let currentNumber = 0

let letters = {
  "I": 0,
  "E": 0,
  "S": 0,
  "N": 0,
  "T": 0,
  "F": 0,
  "P": 0,
  "J": 0,
}
function renderQuestion() {
  const question = questions[currentNumber]

  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  // 질문에 해당하는 이미지를 불러온다
  choice1El.src = question.choices[0].image
  choice2El.src = question.choices[1].image
  progressValueEl.style.width = (currentNumber + 1) * 8.333 + '%'
}

function nextQuestion(choiceNumber) {
  
  const question = questions[currentNumber]
  // 유저가 선택한 선택지에 해당하는 값을 value에 저장
  let value = question.choices[choiceNumber].value
  // 각 질문마다 저장된 value를 if문을 통해 letters 객체 안에 대응하는 값으로 카운팅한다  
  if (value == "E") {
    letters["E"] = letters["E"] + 1
  } else if (value == "I") {
    letters["I"] = letters["I"] + 1
  } else if (value == "S") {
    letters["S"] = letters["S"] + 1
  } else if (value == "N") {
    letters["N"] = letters["N"] + 1
  } else if (value == "T") {
    letters["T"] = letters["T"] + 1
  } else if (value == "F") {
    letters["F"] = letters["F"] + 1
  } else if (value == "P") {
    letters["P"] = letters["P"] + 1
  } else if (value == "J") {
    letters["J"] = letters["J"] + 1
  }
  
  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }

  currentNumber = currentNumber + 1
  console.log(letters);
  renderQuestion()
}
// 객체 letters를 string으로 변환하여 results.html로 넘기기
function showResultPage() {
  location.href = './results.html?mbti=' + JSON.stringify(letters);
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

renderQuestion()

