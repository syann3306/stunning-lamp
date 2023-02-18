import { results, mbtis } from './data.js'

// const mbti = new URLSearchParams(location.search).get('mbti')
// 객체인 mbti를 가져오기 위해 다음같이 변경
const urlParams = new URLSearchParams(window.location.search);
const mbti = JSON.parse(urlParams.get('mbti'));

console.log(mbti)
let myMbti = ''

// 각각의 카운팅된 수를 비교하여 높은 키에 해당하는 것을 myMbti에 담는다
function compare() {
if (mbti["E"] > mbti['I']) {
  myMbti = myMbti + "E"
} else {
  myMbti = myMbti + "I"
}
if (mbti["S"] > mbti['N']) {
  myMbti = myMbti + "S"
} else {
  myMbti = myMbti + "N"
}
if (mbti["T"] > mbti['F']) {
  myMbti = myMbti + "T"
} else {
  myMbti = myMbti + "F"
}
if (mbti["P"] > mbti['J']) {
  myMbti = myMbti + "P"
} else {
  myMbti = myMbti + "J"
}
// if문이 다 돌면 ex. myMbti = "ENTJ"
}
compare()

const result = results[mbtis[myMbti]]

const myMbtiEl = document.querySelector('.myMbti')
// 동물이미지가 들어간다
const animalDiv = document.getElementById("animal");
const boxEls = document.querySelectorAll('.box')

myMbtiEl.innerHTML = myMbti //.toUpperCase()
// animalEl.src = result.animal
animalDiv.style.backgroundImage = `url(${result.animal})`;

boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})