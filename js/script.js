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
let infoPhoto = document.querySelector('.info__photo');
//ПОЛУЧАЕМ SRC КАРТИНКИ
let infoPhotoSrc = infoPhoto.getAttribute('src');
let popUp = document.querySelector('.pop-up');
let popImg = document.querySelector('.pop-up__img');
let body = document.querySelector('body');

sliderImg.forEach(function (currentImg) {
    currentImg.addEventListener('click', function () {
        infoPhotoSrc = currentImg.getAttribute('src');
        infoPhoto.src = infoPhotoSrc;
        document.querySelector('.slider__img--active').classList.remove('slider__img--active');
        currentImg.classList.add('slider__img--active')
    })
});

infoPhoto.addEventListener('click', ()=> {
    popUp.classList.add('pop-up--active');
    popImg.src = infoPhotoSrc;
    body.classList.add('overflowHidden');
});

popUp.addEventListener('click', (event)=> {
    if(event.target.className === 'pop-up pop-up--active') {
        popUp.classList.remove('pop-up--active');
        body.classList.remove('overflowHidden');
    }
    console.log(event.target.className)
})
