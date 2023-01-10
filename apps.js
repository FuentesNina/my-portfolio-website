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


 // Open & Close Skills List Section
function toggleSkillsList(skills) {
    skills.classList.toggle('active');
};

// ****** Slider Previous/Next  Button *****//
//right arrow
const right = document.getElementById("next");
//left arrow
const left = document.getElementById("previous");

//radio buttons
const slide1 = document.getElementById("s1");
const slide2 = document.getElementById("s2");
const slide3 = document.getElementById("s3");
const slide4 = document.getElementById("s4");
const slide5 = document.getElementById("s5");

//array of radio buttons
let radio_array = new Array(slide1, slide2, slide3, slide4, slide5);

//length of radio buttons array
let radio_length = radio_array.length;

//placemarker
let i = 0;

// when you click on a radio button set placemarker to that point
radio_array.forEach(
  (item, index) =>
    (item.onclick = () => {
      i = index;
      //console.log("index #" + (i + 1));
    })
);

right.onclick = () => {
  //increment placemarker
  i++;

  //if placemarker is greater than the length of array go back to start '-1 accounts for the array starting at zero'
  if (i > radio_length - 1) {
    i = 0;
  }
  radio_array[i].checked = true;
};

left.onclick = () => {
  i--;
  if (i < 0) {
    i = radio_length - 1;
  }
  radio_array[i].checked = true;
};
