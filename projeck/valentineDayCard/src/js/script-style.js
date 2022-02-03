// load
let t1 = document.getElementsByClassName('text')[0];
let container = document.getElementsByClassName('container')[0];
let load = document.getElementsByClassName('load')[0];
// component
let cp1 = document.getElementsByClassName('cp1')[0];
let cp2 = document.getElementsByClassName('cp2')[0];
let cp3 = document.getElementsByClassName('cp3')[0];
let cp4 = document.getElementsByClassName('cp4')[0];
let cp5 = document.getElementsByClassName('cp5')[0];
let butterfly = document.getElementsByClassName('butterfly')[0];
let bee = document.getElementsByClassName('bee')[0];
// leaf-left
let leafLeft1 = document.getElementsByClassName('leaf-left')[0];
let leafLeft2 = document.getElementsByClassName('leaf-left')[1];
let flowerLeft = document.getElementsByClassName('flower-left')[0];
// leaf-right
let leafRight1 = document.getElementsByClassName('leaf-right')[0];
let leafRight2 = document.getElementsByClassName('leaf-right')[1];
let flowerRight = document.getElementsByClassName('flower-right')[0];
// content2
let content2 = document.getElementsByClassName('content2')[0];
// content3
let content3 = document.getElementsByClassName('content3')[0];
// content4
let content4 = document.getElementsByClassName('content4')[0];

// 1
setTimeout(function() {
    t1.innerHTML = "14 Februari 2022";
    t1.classList.add('true');
    endLoad();
}, 5200);

// 2
function endLoad() {
    setTimeout(function() {
        container.classList.add('true');
        load.classList.add('false');
        // component
        setTimeout(function() {
            component();
        }, 1000)
    }, 5000);
}

// 3
function component() {
    cp1.classList.add('true');
    cp2.classList.add('true');
    cp3.classList.add('true');
    cp4.classList.add('true');
    cp5.classList.add('true');
    butterfly.classList.add('true');
    bee.classList.add('true');
    // leaf-left
    leafLeft1.classList.add('true');
    leafLeft2.classList.add('true');
    flowerLeft.classList.add('true');
    // leaf-right
    leafRight1.classList.add('true');
    leafRight2.classList.add('true');
    flowerRight.classList.add('true');
    // content
    content2.classList.add('true');
    // content3
    content3.classList.add('true');
    // content4
    content4.classList.add('true');
}