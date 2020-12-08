//platfrom	
const tmpMinutes = document.querySelector('.minutes');
const tmpSekon = document.querySelector('.sekon');
const audio = document.getElementsByTagName('audio')[0];
const opsiPilihan = document.querySelectorAll('.opsiPilihan');
const title = document.getElementsByTagName('title')[0];

//test
console.log(opsiPilihan);

//menyimpan nilai
let minutes;
let sekon;

//melakukan looping opsiPilihan
opsiPilihan.forEach(function(opsiPilClass) {

	//event atau sistemnya
	function system() {
			// //pengecekan		
		// opsiPilClass.classList.add('opsiPilihan');
		// console.log(opsiPilClass);

		//menambahkan atribut opsi__ dan opsiPilihan
		opsiPilClass.classList.add('opsiPilihanUser');
		console.log(opsiPilClass);
		//variabel untuk plusTime = penambahan waktu
		let plusTime;

		// //pengkondisian plusTime
		if( opsiPilClass.className == 'opsi21 opsiPilihan opsiPilihanUser') {
			plusTime = 1500000; }
		if ( opsiPilClass.className == 'opsi22 opsiPilihan opsiPilihanUser'){
			plusTime = 300000; }

		//fot testing
		// if (opsiPilClass.className == 'opsi23 opsiPilihan opsiPilihanUser') {
		// 	plusTime = 5000; }

		if (opsiPilClass.className == 'opsi23 opsiPilihan opsiPilihanUser') {
			plusTime = 900000; }

		//test opsiPilClass
		console.log(opsiPilClass);
		//test waktu tambahan
		console.log(plusTime);
		// waktu awal
		const timeNow = new Date().getTime();
		console.log(timeNow);
		//waktu tujuan
		const goalTime = timeNow + plusTime;
		console.log(goalTime);
		//pengulangan selama 100 milisekon
		const hitungMundur = setInterval(function() {
			//mengambil nilai sekarang
			let timeNow1 = new Date().getTime();
			//selisih dari goalTime - timeNow1
			const selisih = goalTime - timeNow1;
			// console.log('waktu sekarang ' + timeNow1 + ' target ' + goalTime );

			//timer face
			//minutes
			minutes = Math.floor( selisih % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
			//sekon
			sekon = Math.floor( selisih % ( 1000 * 60  ) / ( 1000));

			//when var timeNow1 has more than goalTime
			if( timeNow1 > goalTime) {
				//hentikan hitungan mundur
				clearInterval(hitungMundur);
				// test
				console.log('selesai');
				//minutes
				tmpMinutes.innerHTML = '0';
				//sekon
				tmpSekon.innerHTML = '0';
				//title
				title.innerHTML = 'selesai!';

				//play audio
				audio.setAttribute('src', 'music/music(1.1).mp3');
				audio.setAttribute('autoplay', '');

				//menambahkan attribute
				opsiPilihan.forEach(function(opsiPilClass3) { 
					//untuk menghapus opsiPilihanUser, jika ada
					opsiPilClass3.classList.remove('opsiPilihanUser');
					//menambahkan opsiPilihan, jika tiidak ada
					opsiPilClass3.classList.add('opsiPilihan');
					//test
					console.log(opsiPilClass3);
				});

			} else {
				//minutes
				tmpMinutes.innerHTML = minutes;
				//sekon
				tmpSekon.innerHTML = sekon;

				//title
				title.innerHTML = '(' + minutes + ':' + sekon + ')';
			}
		},100);
			//event 'berhenti' has click
			if( minutes !== 0 || sekon !== 0){
				//when addEventListener is berhenti
				const berhenti = document.querySelector('.berhenti');
				berhenti.addEventListener('click', function() {
					//mengulang web
					window.location.reload();
				});
			}
	}



	//kejadian pertama
	//ketika diklik 
	opsiPilClass.addEventListener('click', function() {
		//if audio have attributes : src and autoplay
		if( audio.getAttribute('autoplay') == '') {
			//menghentikan lagu
			audio.pause();
		}
		//pengkonfisian untuk opsi TimerPomodoro
		if( opsiPilClass.className == 'opsi21 opsiPilihan') {
			//call function system()
			system();
			//lakukan looping
			opsiPilihan.forEach(function(opsiPilClass2) { 
				//pengkondisian
				if ( opsiPilClass2.className !== 'opsi21 opsiPilihan') {
					//menghilangkan atribut
					opsiPilClass2.classList.remove('opsiPilihan');
					console.log(opsiPilClass2);
				}
			});
		} 

		if(opsiPilClass.className == 'opsi22 opsiPilihan') {
		//call function system()
			system();
			//lakukan looping
			opsiPilihan.forEach(function(opsiPilClass2) { 
				//pengkondisian
				if ( opsiPilClass2.className !== 'opsi22 opsiPilihan') {
					//menghilangkan atribut
					opsiPilClass2.classList.remove('opsiPilihan');
					console.log(opsiPilClass2);
				}
			});
		} 
		if(opsiPilClass.className == 'opsi23 opsiPilihan') {
		//call function system()
			system();
			//lakukan looping
			opsiPilihan.forEach(function(opsiPilClass2) { 
			//pengkondisian
			if ( opsiPilClass2.className !== 'opsi23 opsiPilihan') {
				//menghilangkan atribut
				opsiPilClass2.classList.remove('opsiPilihan');
				console.log(opsiPilClass2);
				}
			});
		}
	//akhir dari event opsiPilClass
	});

//closed looping opsiPilihan
});



// animation
//when cursor passes at the content
opsiPilihan.forEach(function(opsiOverPil) {
	opsiOverPil.addEventListener('mouseover', function(){
		if( opsiOverPil.className == "opsi21 opsiPilihan") return opsiOverPil.innerHTML = '25:00';
		if ( opsiOverPil.className == "opsi22 opsiPilihan") return opsiOverPil.innerHTML = '05:00';
		if ( opsiOverPil.className == "opsi23 opsiPilihan") return opsiOverPil.innerHTML = '15:00';
	});
});

//when cursos has passed (leaved) at the content
opsiPilihan.forEach(function(opsiOverPil) {
	opsiOverPil.addEventListener('mouseout', function(){
		if( opsiOverPil.className == "opsi21 opsiPilihan") return opsiOverPil.innerHTML = 'POMODORO';
		if ( opsiOverPil.className == "opsi22 opsiPilihan") return opsiOverPil.innerHTML = 'Istirahat Pendek';
		if ( opsiOverPil.className == "opsi23 opsiPilihan") return opsiOverPil.innerHTML = 'Istirahat Panjang';
	});
});