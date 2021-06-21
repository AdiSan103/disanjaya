let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let slide4 = document.querySelector('.slide4');

timeOutSilde(slide1,slide2, 1000);
timeOutSilde(slide2,slide3, 2000);
timeOutSilde(slide3,slide4, 3000);

function timeOutSilde(beforeClass, afterClass, time) {
    setTimeout( () => {
        beforeClass.classList.add('slideHidden');
        afterClass.classList.remove('slideHidden');
    }, time)
}

// 
setTimeout(() => {
    document.querySelector('.content-right').classList.add('trueTransform');
    document.querySelector('.content h1').classList.add('trueTransform');
    document.querySelector('.content h2').classList.add('trueTransform');
    document.querySelector('.content p').classList.add('trueTransform');
    document.querySelector('.content h5').classList.add('trueTransform');
    document.querySelectorAll('.content h5')[1].classList.add('trueTransform');
    document.querySelector('.content h4').classList.add('trueTransform');
}, 3200);