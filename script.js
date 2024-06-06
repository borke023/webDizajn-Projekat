document.addEventListener("DOMContentLoaded", function () {
  const slajdovi = document.querySelectorAll(".slajd");
  let trenutniBrojac = 0;
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    function prikaziSledeciSlajd() {
      slajdovi[trenutniBrojac].classList.remove("aktivan");
      trenutniBrojac = (trenutniBrojac + 1) % slajdovi.length;
      slajdovi[trenutniBrojac].classList.add("aktivan");
    }

    setInterval(prikaziSledeciSlajd, 8000);
  }
});

window.addEventListener("scroll", function () {
  const navigacija = document.querySelector(".navigacija");

  if (window.scrollY > 200) {
    navigacija.classList.add("scroll");
  } else {
    navigacija.classList.remove("scroll");
  }
});

let hamburgerMenu = document.querySelector(".hamburger-menu-ikonica");
let navigacioniMeni = document.querySelector(".navigacioni-meni");

hamburgerMenu.addEventListener("click", function () {
  navigacioniMeni.classList.add("prikazi");

  if (hamburgerMenu.classList.contains("otvoren")) {
    navigacioniMeni.classList.remove("prikazi");
    document.body.style.overflow = "auto";
    hamburgerMenu.classList.remove("otvoren");
  } else {
    navigacioniMeni.classList.add("prikazi");
    document.body.style.overflow = "hidden";
    hamburgerMenu.classList.add("otvoren");
  }
});

let slika1 = document.querySelector(".slika1");
let slika2 = document.querySelector(".slika2");
let slika3 = document.querySelector(".slika3");
let slika4 = document.querySelector(".slika4");
let slika5 = document.querySelector(".slika5");
let slika6 = document.querySelector(".slika6");
let slika7 = document.querySelector(".slika7");
let slika8 = document.querySelector(".slika8");
let slika9 = document.querySelector(".slika9");
let xDugme = document.querySelector(".gasenje-dugme");
let modalniPorozor = document.querySelector(".modalni-prozor");
let slika = document.querySelector(".slika-za-menanje");

if (xDugme) {
  xDugme.addEventListener("click", function () {
    modalniPorozor.style.display = "none";
    document.body.style.overflow = "auto";
  });
}
if (slika1) {
  slika1.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika1.jpg";
  });
}

if (slika2) {
  slika2.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika9.jpg";
  });
}

if (slika3) {
  slika3.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika3.jpg";
  });
}

if (slika4) {
  slika4.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika4.jpg";
  });
}

if (slika5) {
  slika5.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika5.jpg";
  });
}

if (slika6) {
  slika6.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika6.jpg";
  });
}

if (slika7) {
  slika7.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika7.jpg";
  });
}

if (slika8) {
  slika8.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika8.jpg";
  });
}

if (slika9) {
  slika9.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika2.jpg";
  });
}

//kontakt stranica

const ime = document.querySelector("#ime");
const prezime = document.querySelector("#prezime");
const email = document.querySelector("#email");
const brojTelefona = document.querySelector("#telefon");
const datumRodjenja = document.querySelector("#datum-rodj");
const posaljiDugme = document.querySelector("#posaljiDugme");
const forma = document.querySelector("#forma");
if (forma) {
  forma.addEventListener("submit", function (e) {
    if (
      ime.value === "" ||
      prezime.value === "" ||
      email.value === "" ||
      brojTelefona.value === "" ||
      datumRodjenja.value === ""
    ) {
      e.preventDefault();
      alert("Sva polja moraju biti ispravno popunjena!");
      console.log("Sva polja moraju biti ispravno popunjena!");
    } else if (
      brojTelefona.value.length < 10 ||
      brojTelefona.value.length > 13
    ) {
      e.preventDefault();
      alert("Broj telefona mora imati od 10 do 13 karaktera!");
      console.log("Broj telefona mora imati od 10 do 13 karaktera!");
    } else console.log("Forma je uspesno poslata!");
  });
}
