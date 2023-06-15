const words = [
  {
    name: '제기차기'
  },
  {
    name: '나뭇가지'
  },
  {
    name: '공기놀이'
  },
  {
    name: '어린이집'
  },
  {
    name: '삼각김밥'
  },
  {
    name: '호랑나비'
  },
  {
    name: '스파게티'
  },
  {
    name: '대한민국'
  },
  {
    name: '김치찌개'
  },
  {
    name: '버터구이'
  },
  {
    name: '방방곡곡'
  },
  {
    name: '나팔바지'
  },
  {
    name: '이구동성'
  },
  {
    name: '은행나무'
  },
  {
    name: '초등학교'
  }
]


const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const listContent = document.querySelector('.word-content');
const resultPopup = document.querySelector('.result-popup');
const startPopup = document.querySelector('.start-popup');
const timer = document.querySelector('.timer');
const scoreBox = document.querySelector('.score');
const resultPopupScore = document.querySelector('.result-score');
const inputValue = document.querySelector('.input-box');

const falseResult = document.querySelector('.false-result');
const trueResult = document.querySelector('.true-result');


const randomNum = () => {
  return Math.floor(Math.random() * 15);
}

const wordRandomNum = () => {
  return Math.floor(Math.random() * 4);
}

let score = 0;
let keyword = words[randomNum()].name;
let count = 30;


startBtn.addEventListener('click', () => {
  startPopup.classList.add('hidden');
  inputValue.focus();
  showTimer();
})

resetBtn.addEventListener('click', () => {
  count = 30;
  resultPopup.classList.add('hidden');
  timer.textContent = count;

  scoreBox.textContent = score;
  showTimer();
  inputValue.value = '';
  inputValue.disabled = false;
  inputValue.focus();
  score = 0;
  keyword = words[randomNum()].name;
render();

})


const render = () => {

  let result = '';
  result = `<div class="word" id="word-content-top">
  <p>${keyword[3]}</p>
  <p>${keyword[0]}</p>
</div>
<div class="word" id="word-content-bottom">
  <p>${keyword[2]}</p>
  <p>${keyword[1]}</p>
</div>`;
  listContent.innerHTML = result;
}

render();

inputValue.addEventListener('keydown', (e) => {
  
  if(e.keyCode === 13){
    if(count == 0){
      return false;
    }
    e.preventDefault();
    if (inputValue.value == keyword) {
      score++;
      scoreBox.textContent = score;
      resultPopupScore.textContent = score;
      trueResult.classList.add('show');
      inputValue.value = '';
      inputValue.focus();
      setTimeout(() => {
        keyword = words[randomNum()].name;
        render();
        trueResult.classList.remove('show');
      },500)
    }
    else {
      console.log('x');
      falseResult.classList.add('show');
      setTimeout(() => {
        falseResult.classList.remove('show');
      },500)
    }
  }
  
})

const showTimer = () => {
  let start = setInterval(() => {
    timer.textContent = --count;
    if (count == 0) {
      clearInterval(start);
      inputValue.disabled = true;
      resultPopup.classList.remove('hidden');
      }
  }, 1000);
}

