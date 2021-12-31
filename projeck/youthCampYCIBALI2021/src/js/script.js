
// untuk edit banner gambar slide
defaultBanner(
    // variabel img -> ganti gambar disini, gambar default
    'src/img/18/DSCF8719.JPG',
    // kecepatan
    3000
);

banner(
    // variabel img -> ganti gambar disini, gambar default muncul di src/style.css(background banner)
    [
        'src/img/18/DSCF8719.JPG',
        'src/img/19/PANO0001.JPG',
        'src/img/19/DSCF9551.JPG',
        'src/img/19/DJI_0446.JPG',
        // bisa ditambah
    ],
    // kecepatan pergantian gambar (milisekon)
    3000
);


// play music
function OpenLetter() {
    // variabel
    var audio = document.getElementById("audio");
    // action
    audio.play();
    // call function system
    system();
}


// system
function system() {
    // variabel
    let i = document.querySelector('.loadingIcon2');
    let j = document.querySelector('.body');
    // action
    i.classList.add('true');
    j.classList.remove('d-none');
    // wait
    setTimeout(() => {
        // action
        i.classList.add('d-none');
        // call function system2
        system2();
    },1000)
}

// ############################################################################


function audio() {
    let audio = document.getElementsByTagName('audio')[0];
    let icon = document.querySelector('.audio-control i');
    if(audio.classList != "play") {
        audio.play();
        audio.classList.add('play');
        icon.classList.remove('fa-music');
        icon.classList.add('fa-volume-mute');
    } else {
        audio.pause();
        audio.classList.remove('play');
        icon.classList.add('fa-music');
        icon.classList.remove('fa-volume-mute');
    }
}


// banner
function banner(gambar, kecepatan) {

    let k = document.querySelector('.banner');

    // action
    let j = 0;

    setInterval(() => {
        k.setAttribute(
            "style", 
            `
            background : url(` + gambar[j] +  `);
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            transition: 0.25s;
            animation: background-scale ` + kecepatan * 2 /1000 + `s infinite;
            height: 100vh;
            `
        );

        j++;

        // condition
        if(j == gambar.length) {
            j = 0;
        }

    }, kecepatan);

}

function defaultBanner(gambar_lama, kecepatan) {
    document.querySelector('.banner').setAttribute(
        "style", 
        `
        background : url(` + gambar_lama +  `);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: background-scale ` + kecepatan * 2 /1000 + `s infinite;
        height: 100vh;
        `
    );
}


// remove class
function remove(x, classRemove) {
    document.querySelector(x).classList.remove(classRemove);
}

// add class
function add(x, classAdd) {
    document.querySelector(x).classList.add(classAdd);
}



// ---------------animate-------------------

// system2 
function system2() {
    // banner
    remove('.banner p.p1','fade1');
    gsap.to("h1.title", { duration: 2, text: "YOUTH Camp YCI BALI 2021" });
    setTimeout(() => {
        remove('.banner p.p2','fade1');
    }, 200);

    // // when scroll
    window.addEventListener("scroll", () => {

        let thisScroll = this.scrollY;
        // 1
        if(thisScroll > document.getElementsByClassName('content1')[0].offsetTop - 400) {
            remove('.content1 h2', 'toUp');
            remove('.content1 p.p-content', 'toUp');
            remove('.content1 a', 'toUp');
        }

        // 2
        if(thisScroll > document.getElementsByClassName('content4')[0].offsetTop - 400) {
            add('.content1 h2', 'toUp');
            add('.content1 p.p-content', 'toUp');
            add('.content1 a', 'toUp');
            remove('.content3-container', 'toUp');
        }

        // 3
        if(thisScroll > document.getElementsByClassName('content2')[0].offsetTop - 400) {
            add('.content3-container', 'toUp');
            remove('.content2 .pria','toLeft');
            remove('.content2 .wanita','toRight');
        }

        // video
        if(thisScroll > document.getElementsByClassName('video-container')[0].offsetTop - 400) {
            add('.content2 .pria','toLeft');
            add('.content2 .wanita','toRight');
            remove('.video-content', 'toUp');
        }

        // 5
        if(thisScroll > document.getElementsByClassName('content5')[0].offsetTop - 400) {
            add('.video-content', 'toUp');
            remove('.content5-main', 'toUp');
            gsap.to(".content6  h5", { duration: 3, text: "SALAM KONSERVASI HEBAT" });
        }

    });
    
}
