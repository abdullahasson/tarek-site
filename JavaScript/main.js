// toggle icon navbar 
let asdd = true
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
    if (asdd === true) {
        menuIcon.style.color = "red"
        asdd = false
    } else {
        menuIcon.style.color = "white"
        asdd = true
    }
    menuIcon.classList.toggle(`bx-x`);
    navbar.classList.toggle(`show`)
}

let sections = document.querySelectorAll(`section`);
let navlink = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);
        

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove(`active`);
                document.querySelector(`header nav a[href *= ${id}]`).classList.add(`active`)
            })
        }
    });

    let header = document.querySelector(`header`)

    header.classList.toggle(`sticky` , window.onscroll > 100);


    menuIcon.classList.remove(`bx-x`);
    navbar.classList.remove(`show`)
}



ScrollReveal({ 

    // reset: false,
    distance: `80px`,
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content , .heading', { origin: `top` });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form', { origin: `bottom` });
ScrollReveal().reveal('.home-content h1 , .about-img img', { origin: `left` });
ScrollReveal().reveal('.home-content p , .about-content', { origin: `right` });


const typed = new Typed(`.multiple-text` , {
    strings: [`Front End` , `Freelancer` , `Digener`],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    loop : true
})