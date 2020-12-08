// animation menggunakan jquery

//parallax

//for beranda

//when this page load or start
//pada headerContent
$(window).on('load', function () {
	$('.headerContent1').addClass('headerCMuncul');
	$('.headerContent2').addClass('headerCMuncul');
});


//ketika di scroll
$(window).scroll(function () {
	// mendapatkan jarak scroll
	let wScroll = $(this).scrollTop();
	//test
	// console.log(wScroll);

	//slow elements
	//pada headerContent1
	$('.headerCMuncul').css({
		'transition': '0s'
	});
	$('.headerContent1').css({
		//ubah cssnya
		'transform': 'translate(0px, -' + wScroll / 12 + '%)'
	});
	//mecarikan headerContent2 
	$('.img1').css({
		//ubah cssnya
		'transform': 'translate(0px, -' + wScroll / 8 + '%)'
	});
	//mecarikan headerContent2 
	$('.headerContent2').css({
		//ubah cssnya
		'transform': 'translate(0px, -' + wScroll / 10 + '%)'
	});

	//membuat landing element
	//pada .keunggulan
	// jika nilai jarak .keunggulan dari atas kurang dari wscroll
	if (wScroll > $('.card1').offset().top - 250) {
		// console.log('ok');
		$('.card1').addClass('cardMuncul');
	}

	if (wScroll > $('.card2').offset().top - 250) {
		$('.card2').addClass('cardMuncul');
	}

	if (wScroll > $('.card3').offset().top - 250) {
		$('.card3').addClass('cardMuncul');
	}
	//membuat landing element
	//pada informasi
	//jika nilai wScroll lebih besar dari .informasi
	if (wScroll > $('.informasi .info1').offset().top - 300) {
		//untuk masing" child clasnya / each / pada index ke i
		$('.informasi .info1 p').each(function (i) {
			setTimeout(function () {
				//.eq() elemen ke berapsa
				$('.informasi .info1 p').eq(i).addClass('pMuncul')
				// console.log(i);
			}, 100 + (i * 200));
		});
	}
	//lading element
	if (wScroll > $('.doWork').offset().top - 200) {
		//untuk child clasnya
		$('.doWork .doWorkP').each(function (i) {
			setTimeout(function () {
				$('.doWork .doWorkP').eq(i).addClass('doWorkPMuncul')
			}, 100 + (i * 200));
		});
	}


});