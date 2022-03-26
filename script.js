$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    stagePadding: 30,
    autoplay:true,
    autoplayHoverPause:false,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1,
            margin: 10,
            nav:true
        },
        600:{
            items: 2,
            nav:true
            
        },
        1000:{
            items: 3,
            nav:true
           
        }
    }
});









const btnMobile = document.getElementById('btn-mobile');

console.log(btnMobile)


function toglemenu() {
    const nav = document.getElementById('nav-mobile')
    const navTop = document.getElementById('nav-top')
    navTop.classList.toggle('nav-top-active')
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toglemenu);






