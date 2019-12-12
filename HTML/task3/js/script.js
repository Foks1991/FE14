const liList = document.getElementsByClassName('col1');
let tmp;
for (let i = 0; i < liList.length; i++) {
    liList[i].addEventListener('click', function () {
        liList[i].classList.toggle('isActive')
    });
}

const trig = document.getElementsByClassName('circ')[0];
const trigBg = document.getElementsByClassName('trigger')[0];

trigBg.addEventListener('click', function () {
    trigBg.classList.toggle('isActiveTrig');
    trig.classList.toggle('trigSlide');
})