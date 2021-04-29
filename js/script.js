// 1.public variabel
let thisScroll;

// 2.loading
function Loading() {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".home").style.display = "block";
  document.querySelector(".home").classList.add("afterLoading");
  document.querySelector("body .afterLoading").style.display = "block";
}

// 3.navbar
function hamburgerMenuPart() {
  let hamburgerMenu = document.querySelector(".menu");
  let ContainerHamburgerMenu = document.querySelector(".hamburger-menu");
  let hamburgerMenu1 = document.querySelectorAll(".item-hamburger-menu");
  let hamburgerMenu2 = document.querySelector(".item-hamburger-menu-2");
  // hover
  ContainerHamburgerMenu.addEventListener("mouseover", function () {
    if (hamburgerMenu.classList != "menu true") {
      hamburgerMenu1[0].classList.add("hover");
      hamburgerMenu1[1].classList.add("hover");
      hamburgerMenu2.classList.add("hover");
    }
  });
  ContainerHamburgerMenu.addEventListener("mouseout", function () {
    hamburgerMenu1[0].classList.remove("hover");
    hamburgerMenu1[1].classList.remove("hover");
    hamburgerMenu2.classList.remove("hover");
  });

  // click
  ContainerHamburgerMenu.addEventListener("click", function () {
    if (hamburgerMenu.classList == "menu true") {
      hamburgerMenu.classList.remove("true");
      hamburgerMenu1[0].classList.remove("true");
      hamburgerMenu1[1].classList.remove("true");
      hamburgerMenu2.classList.remove("true");
    } else {
      hamburgerMenu.classList.add("true");
      hamburgerMenu1[0].classList.add("true");
      hamburgerMenu1[1].classList.add("true");
      hamburgerMenu2.classList.add("true");
      hamburgerMenu1[0].classList.remove("hover");
      hamburgerMenu1[1].classList.remove("hover");
      hamburgerMenu2.classList.remove("hover");
    }
  });

  // a.home hover
  let home = document.querySelector("a.home");
  let borderHome = document.querySelector(".menu .borderHome");
  home.addEventListener("mouseover", function () {
    borderHome.classList.add("true");
  });
  home.addEventListener("mouseout", function () {
    borderHome.classList.remove("true");
  });

  // b.project hover
  let project = document.querySelector("a.project");
  let borderProject = document.querySelector(".menu .borderProject");
  project.addEventListener("mouseover", function () {
    borderProject.classList.add("true");
  });
  project.addEventListener("mouseout", function () {
    borderProject.classList.remove("true");
  });

  // c.aboutMe hover
  let aboutMe = document.querySelector("a.aboutMe");
  let borderAboutMe = document.querySelector(".menu .borderAboutMe");
  aboutMe.addEventListener("mouseover", function () {
    borderAboutMe.classList.add("true");
  });
  aboutMe.addEventListener("mouseout", function () {
    borderAboutMe.classList.remove("true");
  });

  // c.contactMe hover
  let contactMe = document.querySelector("a.contactMe");
  let borderContactMe = document.querySelector(".menu .borderContactMe");
  contactMe.addEventListener("mouseover", function () {
    borderContactMe.classList.add("true");
  });
  contactMe.addEventListener("mouseout", function () {
    borderContactMe.classList.remove("true");
  });
}

// 4. banner-title first reaction-gsap
function bannerTitle() {
  gsap.to("h1 span.text", { duration: 3, text: "Disanjaya" });
}

// 5. content1-jquery
function content1() {
  if (thisScroll > $(".content1").offset().top - 150) {
    // console.log(thisScroll + " dan " + $(".content1").offset().top);
    $(".imgSvg1").addClass("noHidden");
    $(".content1 .content1-right h3").addClass("noHidden");
    // gsap
    gsap.to(".content1 .content1-right h4", {
      duration: 2,
      text: ' "a coffee and Many briliant Ideas" ',
    });
  }
}

// 6.projectList-jquery
function projectList() {
  if (thisScroll > $(".projectList").offset().top - 200) {
    $(".projectList h2").addClass("noHidden");
    $(".project .card").each(function (i) {
      setTimeout(function () {
        $(".project .card").eq(i).addClass("noHidden");
        setTimeout(function () {
          $(".project .card").eq(i).addClass("again");
        }, i * 500);
      }, i * 200);
    });
  }
}

// 7.content2-jquery
function content2() {
  if (thisScroll > $(".content2").offset().top - 150) {
    $(".content2-left").addClass("noHidden");
  }
}

// 8.content3-jquery
function content3() {
  if (thisScroll > $(".content3").offset().top - 150) {
    $(".content3 .content3-title h2").addClass("noHidden");
    setTimeout(function () {
      $(".content3 .content3-title h4").addClass("noHidden");
    }, 500);
    $(".content3-card .card").each(function (i) {
      setTimeout(function () {
        $(".content3-card .card").eq(i).addClass("noHidden");
      }, i * 200);
    });
  }
}

// 9.content4-jquery
function content4() {
  if (thisScroll > $(".content4").offset().top - 150) {
    $(".content4-left-top").addClass("noHidden");
    setTimeout(function () {
      $(".content4-left-bottom").addClass("noHidden");
    }, 500);
  }
}

// ############################################################################

// main logic
// loading
$(window).on("load", function () {
  // loading
  setTimeout(function () {
    // laading
    Loading();
    // banner-title
    bannerTitle();
    // aksi pada hamburger menu
    hamburgerMenuPart();
    $(window).scroll(function () {
      thisScroll = $(this).scrollTop();
      // content1
      content1();
      // projectList
      projectList();
      // content2
      content2();
      // content3
      content3();
      // content4
      content4();
    });
  }, 1500);
});
