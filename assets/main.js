const introText = document.querySelector('.intro-text');
const pages = document.querySelector('.main');
const rideBtn = document.querySelector('.intro-ride');
const moreBtn = document.querySelector('.intro-more');
const captchaBtn = document.querySelector('.captcha-btn');
const QuizBtn = document.querySelectorAll('.quiz li');
const QuizBox = document.querySelector('.quiz-box');

const compliments = {
    1: `I mean, I don't really know you, even making this website feels a little stalky and weird but, you're fun to talk to and know a lot about everything. you have a talent for breaking things down into simple digestable pieces, you're easy going and down to earth so talking to you feels like talking to just a dude but you're also more than that. I think we can all collectively agree the world is a better place with a Cyril in it. This is supposed to be your day, the day you age another year, get a chance to experience life as a more mature cyril and also, get closer to death by a year, so enjoy it `,
    2: `uhhh, alright. OmG cYrIl YoU'Re So CoOl, I bEt YoU'D CaUsE An ExPlOsIon JuSt tO NoT LoOk At It`,
    3: `Bruh, more? get yourself a room, a mirror and a bottle of lotion dude.`,
    4: `Get help, jesus. `,
    5: `Okay I'm not doing more, this is getting weird`,
    6: `Will you press the red button or should I do it myself?`,
    7: `Aight, I ain't saying anything from now on`
}
let current = 0;
let complimentCount = 1;
let typeSpeed = 25;
let pagePos = 0;





























// ======================== GENERAL==================
// ==================================================

function setClass(element, id) {
    element.classList.add(id)
}

function typeride(el, txt, speed = 0){
   let lgth = txt.length;

   if(current < lgth) {
    el.textContent += txt.charAt(current);
    current++
    setTimeout(typeride, speed, el, txt, speed)
   }else {
    if(complimentCount == 1 ) showIntrobtn()
   }
}

function nextPage() {
    pagePos += 100
    pages.style.transform = `translateY(-${pagePos}vh)`
}

































// ======================== SECTIONS ==================
// ==================================================


function intro() {
    rideBtn.addEventListener('click', () => {
        nextPage();
        setTimeout(showQuiz, 1000)
    })

    moreBtn.addEventListener('click', () => {
        if(complimentCount < Object.keys(compliments).length) {
            complimentCount++;
            introText.textContent = '';
            current = 0;
            typeride(introText, compliments[complimentCount], typeSpeed)
        }
    })

}

function showIntrobtn() {
    let btns = document.querySelectorAll('.intro-button');

    btns.forEach(el => el.classList.add('show-intro-button'))
} 









// ============================== CAPTCHA SECTION 
function random() {
    intro()
typeride(introText, compliments[complimentCount], typeSpeed)

}


function captcha() {
    captchaBtn.classList.add('captcha-btn-show');
    setTimeout(nextPage, 1000);
    setTimeout(random, 2000);
}



captchaBtn.addEventListener('click', captcha);







// ========================== quize

function showQuiz() {
    QuizBox.classList.add('show-quiz');
    QuizBtn.forEach(btn => {
        btn.classList.add('show-quiz');
        btn.addEventListener('click', quizClicked);
    })
}

function quizClicked() {
    QuizBtn.forEach(btn => {
        btn.classList.add('delay')
        btn.classList.add('quiz-green')
        setTimeout(() => {
            document.querySelector('.popup').classList.add('none');
            document.querySelector('.popup-close').addEventListener('click', showGame);
        }, 300)
    })

}











function showGame() {
    document.querySelector('.popup').classList.remove('none');
    setTimeout(nextPage, 300)
}