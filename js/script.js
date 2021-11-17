let btn = document.querySelector('.order__form-btn');


function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

btn.addEventListener('click', function (max) {
    alert(getRandomInt(12))
})




let sizeContainer = document.querySelector('.order__size-container')

let sizeBtn = document.querySelectorAll('.order__size-btn');

// sizeContainer.addEventListener('click', () => {
//     alert('Hello')
// })

for (i = 0; i < sizeBtn.length; i++) {
    sizeBtn[i].addEventListener('click', function () {
        this.classList.add('ff')
    })
}





// POP UP

let sliderImg = document.querySelectorAll('.slider__img');
let popUp = document.querySelector('.pop-up');
let body = document.querySelector('body');

sliderImg.forEach(function (currentImg) {
    currentImg.addEventListener('click', function () {
        popUp.classList.add('pop-up--active');
        body.classList.add('overflowHidden');
    })
});

// sliderImg.addEventListener('click', function () {
//
// });