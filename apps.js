// Change the navigation Bar styling in function of the page location
const header = document.querySelector('header');
const homeSection = document.querySelector("section.home");

const homeSectionOptions = {rootMargin: "-500px 0px 0px 0px"};

const homeSectionObserver = new IntersectionObserver(function(entries, navObserver) {
    entries.forEach(entry => {
        header.classList.toggle('nav-scrolled', !entry.isIntersecting);
    })
}, homeSectionOptions);

homeSectionObserver.observe(homeSection);

// Keep the section visited highlighted
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.header-desktop ul li');
const sectionTitle = document.querySelectorAll(".header-mobile p")
const navBarMargin = header.clientHeight;

window.addEventListener('scroll', () => {
    let currentSection = '';

   sections.forEach( section => {
        const sectionTop = section.offsetTop - navBarMargin;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight * 0.1) {
            currentSection = section.getAttribute('id');
        }
    });

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(currentSection)) {
            li.classList.add('active');
        }
    });

    sectionTitle.forEach( p => {
        p.classList.remove('active');
        if(p.classList.contains(currentSection)) {
            p.classList.add('active');
        }
    });
});

// Open & Close Mobile Menu
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};


//Makes sure the page loads at the top of the page
if (history.scrollRestoration) {
     history.scrollRestoration = 'manual';
 } else {
     window.onbeforeunload = function () {
         window.scrollTo(0, 0);
     }
 }
