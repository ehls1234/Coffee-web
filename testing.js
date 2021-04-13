const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});

const clockTarget = document.getElementById("clock");
function clock() {
    const date = new Date();
    // date Object를 받아오고

    const hours = date.getHours();
    // 시간을 받아오고 

    const minutes = date.getMinutes();
    // 분도 받아옵니다.

    const seconds = date.getSeconds();
    // 초까지 받아온후 

    clockTarget .innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    // 월은 0부터 1월이기때문에 +1일을 해주고 
    // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다. 

}

function init() {
clock();
// 최초에 함수를 한번 실행시켜주고 

setInterval(clock, 1000);
// setInterval이라는 함수로 매초마다 실행을 해줍니다.
// setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 

}

init();