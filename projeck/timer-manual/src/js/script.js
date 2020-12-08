let start = document.getElementsByClassName("start")[0];
let jamP = document.getElementById("jamP");
let menitP = document.getElementById("menitP");
let detikP = document.getElementById("detikP");
let reset = document.getElementsByClassName("reset")[0];
let inputDataJam;
let inputDataMenit;
let inputDataDetik;
let timerGo;

// ^function^
// 1.function ketika timer berhenti
function stopTImer() {
    alert('selesai!');
    clearInterval(timerGo);
    location.reload();
}

// 2.function ketika timer berjalan
function Timer() {
    // dapatkan data jam, menit, detik
     // kalikan ke satuan internasional 
    let thisJam = parseInt(inputDataJam);
    let thisMenit = parseInt(inputDataMenit); 
    let thisDetik = parseInt(inputDataDetik); 
    // kalikan ke satuan internasional dan tambahkan jam, menit, detik lalu masukkan pada variabel timerTotal
    let timerTotal = (thisJam * 3600 * 1000 ) + (thisMenit * 60 * 1000) + (thisDetik * 1000);
    console.log(timerTotal);
    // gunakan waktu komputer sebagai acuan masukkan nilai ke dalam variabel nowTime
    let nowTime = new Date().getTime();
    console.log(nowTime);
    let afterNowTime = nowTime + timerTotal;
    // membuat variabel afterNowTime dengan menambahkan timerTotal dengan nowTime
    // looping dalam setInterval
    timerGo = setInterval(function(){
            // gunakan waktu komputer sebagai acuan masukkan nilai ke dalam variabel nowTime
            let nowTime2 = new Date().getTime();
            let selisihTime = afterNowTime - nowTime2;
            // lalu bandingkan, jika hasil sama dengan afterNowTime, berikan pesan selesai
            if( selisihTime > 0) {
                console.log('ini' + selisihTime);
                // agar user mengetahui waktu sedang berjalan
                // dapatkan nilai
                let selisihJam = Math.floor(selisihTime / (1000 * 60 * 60 ));
                console.log('ini jam ' + selisihJam);
                let selisihMenit = Math.floor(selisihTime % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
                console.log('ini menit' + selisihMenit);
                let selisihDetik = Math.floor(selisihTime % ( 1000 * 60  ) / ( 1000));
                console.log('ini detik' + selisihDetik);
                // tampilkan nilai
                jamP.innerHTML = selisihJam;
                menitP.innerHTML = selisihMenit;
                detikP.innerHTML = selisihDetik;
                // tampilkan opsi atur ulang timer
                reset.style.display = "flex";
                reset.addEventListener('click',function(){
                    // hentikan 
                stopTImer();
                })
            } else {
                stopTImer();
            }
        }
        // kembalikan seperti semula
    ,1000)
}



// ^main of logic^
start.addEventListener('click',function() {

    if(start.classList == "start mulai"){
        inputDataJam = document.getElementById("inputDataJam").value;
        inputDataMenit = document.getElementById("inputDataMenit").value;
        inputDataDetik = document.getElementById("inputDataDetik").value;
        // jika tidak ada nilai yang diberikan
        if(inputDataJam === "" && inputDataMenit === "" && inputDataDetik === "") {
            // tampilkan pesan
            alert('tidak ada nilai yang dimasukkan')
        } else {
            if(inputDataJam === "") { inputDataJam = 0 };
            if(inputDataMenit === "") { inputDataMenit = 0 };
            if(inputDataDetik === "") { inputDataDetik = 0 };
                // console.log(inputDataJam);
            jamP.innerHTML = inputDataJam;
            menitP.innerHTML = inputDataMenit;
            detikP.innerHTML = inputDataDetik;
            start.classList.remove('mulai');
            start.classList.add('load');
            start.innerHTML = 'sedang berlangsung...';
            // jalankan function Timer
            Timer();
        }
    } 
})