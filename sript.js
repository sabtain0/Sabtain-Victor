const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navlink = document.querySelectorAll('.nav__link')

function linkaction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

const section = document.querySelectorAll('section[id')
window.addEventListener('scroll', scrollActive)
function scrollActive() {
    const scrollY = window.scrollY

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.Attributes('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active')

        }
    })
}

const  sr = ScrollReveal({
    origin :"top",
    distance:"80px",
    duration:2000,
    reset : true

})
sr.reveal('.home__title' , {})
sr.reveal('.home__scroll' , {delay:2000})
sr.reveal('.home__image' , {origin:'right' , delay:400})


sr.reveal('.about__img' , { delay:500})
sr.reveal('.about__profession' , { delay:400})
sr.reveal('.about__subtitle' , { delay:300})
sr.reveal('.about__text' , { delay:500})
sr.reveal('.about__social-icon' , { delay:600 , interval:200})

sr.reveal('.skill-subtitle' , { delay:300})
sr.reveal('.skills__name' , { distance:'20px' , delay:20 , interval:100})
sr.reveal('.skills_img' , { delay:400})

sr.reveal('.portfolio__img' , { delay:200})

sr.reveal('.contact__subtitle' , {})
sr.reveal('.contact__text' , {delay:200})
sr.reveal('.contact__input' , {delay:400})
sr.reveal('.contact__button' , {delay:600})
