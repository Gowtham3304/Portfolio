
let slideIndex1 = 0;
let slideIndex2 = 0;
carousel();
function carousel() {
    let i;
    let slides1 = document.querySelectorAll('.left-project .slide');
    let slides2 = document.querySelectorAll('.right-project .slide');
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }
    slideIndex1++;
    slideIndex2++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }
    slides1[slideIndex1 - 1].style.display = 'block';
    slides2[slideIndex2 - 1].style.display = 'block';
    setTimeout(carousel, 2000);
}
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
