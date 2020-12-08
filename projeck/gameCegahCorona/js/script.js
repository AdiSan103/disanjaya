const option = document.querySelectorAll('.option');
const mulai = document.querySelector('a.start');
const box = document.querySelectorAll('.box');
const skorTable = document.querySelector('.table-skor');
const audio = document.querySelector('.playAudio');
const popUp = document.querySelector('.pop-up');
const skorEnd = document.querySelector('.skor-end');
const playTime = document.querySelector('.timer');

let playTimeEnd;
let playValue;
let skor;
let boxBefore;

// pop-up close
popUp.addEventListener('click', function () {
    //hapus class muncul pada class pop-up
    popUp.classList.remove('muncul');
    //tambahkan teks pada playTime
    playTime.textContent = 30 + ' detik';
});

//mulai
mulai.addEventListener('click', function () {
    //waktu bermain 30 detik
    const playTimerStart = new Date().getTime();
    console.log(playTimerStart);
    //waktu tujuan
    playTimerEnd = playTimerStart + 30000;
    // console.log(playTimerEnd);
    //nilai awal skor
    skor = 0;
    //reset nilai skor-table
    skorTable.textContent = 0;
    //playValue bernilai false
    playValue = false;
    //menjalankan gameplay
    gamePlay();
    //kondisi jika sudah 30 detik dan jika playValue bernilai false
    setTimeout(() => {
        playValue = true;
        //reset nilai skor
        // skorTable.textContent = 0;
        skorEnd.textContent = skor;
        //tambahkan class muncul in class pop-up
        popUp.classList.add('muncul');
        //tambahkan teks
        playTime.textContent = 'selesai';
    }, 30000);
})

//mulai game
function gamePlay() {
    //set waktu saat ini
    let TimeNow = new Date().getTime();
    // console.log(TimeNow);
    //selisih waktu sekarang dengan waktu tujuan (playTimeEnd)
    let realPlayTime = Math.floor((playTimerEnd - TimeNow) / 1000);
    // console.log(realPlayTime);
    //kurangi waktu 
    playTime.textContent = realPlayTime + ' detik';
    //mengacak waktu
    const rTOption = rTimeOption(500, 1000);
    //mengacak option
    const rOption = randomOption();
    //mengacak box
    const rBox = randomBox();
    //pilihan dari Option
    optionOpsi(rOption, rBox);
    //jalankan ketika setelah waktu ( berdasarkan rTOption)
    setTimeout(function () {
        const optionRBOX = option[rBox].classList[1];
        if (optionRBOX == 'virus') {
            option[rBox].classList.remove('virus');
        }
        if (optionRBOX == 'mask') {
            option[rBox].classList.remove('mask');
        }
        if (optionRBOX == 'child') {
            option[rBox].classList.remove('child');
        }
        // box[rBox].classList.remove('muncul');
        //jika playValue tidak sama dengan true maka jalankan gamePlay()
        //callback memanggil lagi sampai playValue =  true
        if (!playValue) {
            gamePlay();
        }
    }, rTOption);
}

//pengacakan option
function randomOption() {
    //nilai acak opsi
    let rOption = (Math.random() * 10);
    //pengkondisian
    if (rOption <= 3) return rOption = 3;
    if (rOption < 6 && rOption > 3) return rOption = 2;
    if (rOption => 6) return rOption = 1;
    return rOption;
}

//mengacak box
function randomBox() {
    //mengacak sesaui dengan banyak pada box
    let rBox = Math.floor(Math.random() * box.length);
    //jika box sama seperti sebelumnya, maka lakukan pengulangn kembali
    if (boxBefore == rBox) {
        randomBox();
    }
    //nilai box saat ini
    boxBefore = rBox;
    return rBox;
}


//pilihan dari option
function optionOpsi(rOption, rBox) {
    // console.log(`ini ${rOption}`);
    if (rOption == 1) {
        option[rBox].classList.add('virus');
        // box[rBox].classList.add('muncul');
    }
    if (rOption == 2) {
        option[rBox].classList.add('child');
        // box[rBox].classList.add('muncul');
    }
    if (rOption == 3) {
        option[rBox].classList.add('mask');
        // box[rBox].classList.add('muncul');
    }
}

// acak waktu option
function rTimeOption(min, max) {
    //rTOption berisi bilangan bulat yang diacak ( dikali ( hasil pengurangan max dan min dan di tambahkan min))
    const rTOption = (Math.round(Math.random() * (max - min) + min));
    return rTOption;
}


//ketika box di klik
option.forEach(box => {
    box.addEventListener('click', touchBox);
});

//function touch
function touchBox() {
    //play audio
    audio.play();
    // hapus parentnya yang memiliki class 'muncul'
    this.parentNode.classList.remove('muncul');
    //mengambil nilai acak darii function randomOption
    let raOption = randomOption();
    // console.log(raOption);
    //nilai class box
    const pilOption = this.classList[1];
    console.log(pilOption);
    //pengkondisian jika child / mask di pukul
    if (pilOption == 'child') {
        alert(`Maaf Anda Mengenai Anak!, skor dikurang 1`);
        skor -= 2;
    }
    if (pilOption === 'mask') {
        // kuis
        let Quiz1;
        let Quiz2;
        let Quiz3;
        if (raOption == 1) {
            Quiz1 = prompt(`apa kepanjangan dari Covid-19 ? \n
            (kirimkan jawaban dengan : a/b/c/d ) \n
            a. coronavirus disease 2019 \n
            b. corona virus division 2019 \n
            c. corona virus disenfectan 2019 \n
            d. corona virus dorection 2019`);
            console.log('ini' + Quiz1);
        }
        if (raOption == 2) {
            Quiz2 = prompt(`Pada Suhu tubuh orang dewasa, demam di kategorikan ketika suhu mencapai... \n
            (kirimkan jawaban dengan : a/b/c/d ) \n
            a. 36 derajat Celcius \n
            b. 38 derajat Celcius \n
            c. 38,5 derajat Celcius \n
            d. 39 derajat celcius`);
            console.log('ini' + Quiz2);
        }
        if (raOption == 3) {
            Quiz3 = prompt(`Apa itu disinfektan ? \n
            (kirimkan jawaban dengan : a/b/c/d ) \n
            a. Bahan buatan untuk membunuh mikrooganisme yang terpapar secara langsung \n
            b. Bahan kimia untuk melindungi mikrooganisme yang terpapar secara langsung \n
            c. Bahan kimia untuk mikrooganisme yang terpapar secara langsung \n
            d. Bahan kimia untuk membunuh mikrooganisme yang terpapar secara langsung  `);
            console.log('ini' + Quiz3);
        }
        //pengkondisian quiz
        if (Quiz1 == 'a' || Quiz2 == 'b' || Quiz3 == 'c') {
            skor++;
            alert('anda benar!');
        } else {
            skor--;
            alert('anda salah!');
        }
    }
    //tambahkan niali skor, secara default
    skor++;
    //tampilkan pada skor-table
    skorTable.innerHTML = skor;
}