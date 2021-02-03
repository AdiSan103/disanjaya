//variabel public-start
// mendapatkan jarak scroll
let thisScroll;
//console.log(thisScroll);
// variabel public-end


function whenButtonScrollUp() {
    // buttonUp
    // vanila-js start 
    let buttonScrollUp = document.getElementsByClassName("scrollTop")[0];
    let imgButtonScrollUp = document.getElementsByClassName("imgButtonScrollUp")[0];
    buttonScrollUp.addEventListener('click', function() {
        location.href = "#beranda";
        imgButtonScrollUp.classList.add('true');
        setTimeout(function() {
            imgButtonScrollUp.classList.remove('true');
        }, 1000)
    })
    // vanila-js end
}

function projekPart() {
    // projek
    if(thisScroll > $('#projek').offset().top - 200) {
        // projek-box
        $('.container-item .box').each(function (i) {
            setTimeout(function () {
                $('.container-item .box').eq(i).addClass('true');
                setTimeout(function(){
                    $('.container-item .box').eq(i).addClass('again');
                }, ( i * 500));
            }, ( i * 200));
        });
    };
}

function tentangKamiPart() {
    // tentangKami
    if(thisScroll > $('#tentangKami').offset().top - 200) {
        // desk-left-img
        setTimeout(function() {
            $('.desk-left img').addClass('again');
        }, 500)
        $('.desk-left img').addClass('true');
        // desk-right
        $('.desk-right h3').addClass('true');
        $('.desk-right h4').addClass('true');
        $('.desk-right h5').addClass('true');
        setTimeout(function() {
            $('.desk-right h5.true').addClass('again');
        }, 400)
        setTimeout(function() {
            $('.desk-right h5.true.again').addClass('again1');
        }, 600)
    }
}

function hamburgerMenuPart() {
    // hamburger-menu start
    // vanila-js start
        let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
        let optionNavbar = document.getElementsByClassName("option-navbar")[0];
        hamburgerMenu.addEventListener("click", function(){
        if(hamburgerMenu.classList == "hamburger-menu true") {
            hamburgerMenu.classList.remove("true");
            optionNavbar.classList.remove("true");
        } else {
            hamburgerMenu.classList.add("true");
            optionNavbar.classList.add("true");
        }
        // vanila-js end
    });
    // hamburger-menu end
}

function navBerandaHubKamiPart() {
    // beranda-navbar
    if(thisScroll > $('#beranda').offset().top ) {
        $('nav .option-navbar a').removeClass('true');
        $('nav .option-navbar a.beranda').addClass('true');
    }
    // tentangKami
    if(thisScroll > $('#tentangKami').offset().top - 200) {
        // tentang kami-navbar
        $('nav .option-navbar a').removeClass('true');
        $('nav .option-navbar a.tentangKami').addClass('true');
    }

    if(thisScroll > $('#projek').offset().top - 200) {
        // projek-navbar
        $('nav .option-navbar a').removeClass('true');
        $('nav .option-navbar a.projek').addClass('true');
    }
     // hubungi kami-navbar
     if(thisScroll > $('#hubungiKami').offset().top - 100) {
        $('nav .option-navbar a').removeClass('true');
        $('nav .option-navbar a.hubungiKami').addClass('true');
    } 
}

function afterScroll() {
    // scrollTop
    $('.scrollTop').addClass('true');
    // loading
    $('body.loading1').removeClass('loading1');
    $('.loading').css("display", "none");
    $('.logo.loading2').removeClass('loading2');
    $('.item1.loading2').removeClass('loading2');
    $('.item2.loading2').removeClass('loading2');
    $('.item3.loading2').removeClass('loading2');
    // logo
    $('.logo img').addClass('true');
    // banner right img
    // 1. ketika loading
    $('.banner-right img.image-1').addClass('true');
    setTimeout(function() {
        $('.banner-right img.image-1.true').addClass('again');
    }, 500)
    // banner left
    $('.banner-left').addClass('true');
}



// inti dari logika projek
// loading
$(window).on('load', function() {
    // penerapan asynchronous
    // koding akan di eksekusi setelah 3 detik
    setTimeout(function() {
        // memanggil
        whenButtonScrollUp();
        // beberapa bagian berubah
        afterScroll();
        // aksi pada hamburger menu
        hamburgerMenuPart();
        // parallax start
        // ketika di scroll atau pada ketinggian dari layar website  tertentu ( untuk animasi -> parallax)
        $(window).scroll(function() {
            thisScroll = $(this).scrollTop();
            // beranda-navbar-part
            navBerandaHubKamiPart();
            // projek-part
            projekPart();
            // tentang-kami-part
            tentangKamiPart();
        })
    }, 3000)
})

