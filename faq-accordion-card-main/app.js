
const arrowBtn = [...document.querySelectorAll('.arrow')];
const p1 = document.querySelector('.p-one');
const p2 = document.querySelector('.p-two');
const p3 = document.querySelector('.p-three');
const p4 = document.querySelector('.p-four');
const p5 = document.querySelector('.p-five');

const showAnswer = () => {
    for(let i = 0; i < arrowBtn.length; i++){
        arrowBtn[i].addEventListener('click', () => {
            arrowBtn[i].classList.toggle('rotate');
            if(i == 0){
                p1.classList.toggle('shown')
            } else if(i == 1){
                p2.classList.toggle('shown')
            } else if(i == 2){
                p3.classList.toggle('shown')
            } else if(i == 3){
                p4.classList.toggle('shown')
            } else if (i == 4){
                p5.classList.toggle('shown')
            } else {
                p1.classList.toggle('para');
            }
        })
    }
}

showAnswer();