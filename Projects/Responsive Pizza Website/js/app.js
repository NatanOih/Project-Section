/* SHOW MENU  */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validates variables
    if(toggle && nav){
        //add show-menu class to the div tag with 'nav__menu'
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }  
}

showMenu('nav-toggle', 'nav-menu');


// REMOVE MENU MOBILE  

    //remove show-menu class when a link is clicked

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkAction))


    // scroll section active link 

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYoffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add(
                'active-link')
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove(
                'active-link')
        }


    })
}

window.addEventListener('scroll', scrollActive)


    // CHANGE BACKGROUND HEADER 

function scrollHeader (){
    const nav = document.getElementById('header')
    //when the scroll is greater than 100 viewport heifght, add the scroll header class
    if(this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


    // SHOW SCROLL TOP 

function scrollTop (){
    const scrollTop = document.getElementById('scroll-top')
    //When the scroll is hiehger than 260 add show-scroll class to the header
    if(this.scrollY >= 260) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');

}

window.addEventListener('scroll', scrollTop)



    //THE MENU

    document.querySelectorAll('.menu__container img').forEach(image => {
      image.onclick = () => {
        document.querySelector('.popout-img').style.display = 'block';
        document.querySelector('.popout-img .img').src = image.getAttribute('src');
      }  
    });

    document.querySelector('.popout-img span').onclick = () => {
        document.querySelector('.popout-img').style.display = 'none';
    }


    // scroll reveal animation

    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        reset:true
    });

    sr.reveal('.home__data, .about__data, .about__img, .services__content, .menu__content, .footer__container, .mapouter',{
        interval:200
    });



  
    

