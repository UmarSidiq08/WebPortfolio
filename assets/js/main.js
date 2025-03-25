/*--------NAVIGATION BAR FUNCTION------*/
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Menutup menu saat link diklik
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        var menuBtn = document.getElementById("myNavMenu");
        menuBtn.className = "nav-menu"; // Menutup menu
    });
});

/*-----------ADD NAVBAR SHADOW WHILE SCROLL--------*/

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
/*TYPING*/
var typingEffect = new Typed(".typedText",{
    strings : ["Student","Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

/*Scroll*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })

/*HOME*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/*SKILLS*/
sr.reveal('.skills-grid',{interval: 200})
/*Header*/
sr.reveal('.top-header',{})

const srleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration:2000,
    reset: true
})
srleft.reveal('.about-info',{delay:100})
srleft.reveal('.contact-info',{delay:100})
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration:2000,
    reset: true
})
srleft.reveal('.about-info-2',{delay:100})
srleft.reveal('.form-control',{delay:100})
srleft.reveal('.social_icons-2',{delay:100})

const sections = document.querySelectorAll('section[id]')


document.addEventListener("DOMContentLoaded", function () {
    const formButton = document.querySelector(".form-button .btn");

    formButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah submit bawaan

        // Ambil nilai dari input field
        const name = document.querySelector(".input-field[placeholder='Name']").value.trim();
        const email = document.querySelector(".input-field[placeholder='Email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        // Cek apakah ada input yang kosong
        if (name === "" || email === "" || message === "") {
            Swal.fire({
                title: "Oops!",
                text: "Please fill in all the fields before sending.",
                icon: "warning",
                confirmButtonText: "OK",
                confirmButtonColor: "#FFA500"
            });
            return; // Hentikan proses jika ada yang kosong
        }

        // Validasi email harus mengandung @ dan format yang benar
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex untuk validasi email
        if (!emailPattern.test(email)) {
            Swal.fire({
                title: "Invalid Email!",
                text: "Please enter a valid email address",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "#FF0000"
            });
            return; // Hentikan proses jika email tidak valid
        }

        // Jika semua valid, kosongkan input dan tampilkan pesan sukses
        document.querySelector(".input-field[placeholder='Name']").value = "";
        document.querySelector(".input-field[placeholder='Email']").value = "";
        document.querySelector("textarea").value = "";

        Swal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#00B5E7"
        });
    });
});
function setActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => {
                link.classList.remove('active-link'); // Hapus kelas aktif dari semua link
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active-link'); // Tambahkan kelas aktif pada link yang sesuai
                }
            });
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', setActiveMenu);