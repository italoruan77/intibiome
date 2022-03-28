$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    autoplay: true,
    stagePadding: 30,
    autoplayHoverPause:false,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1,
            margin: 10,
            nav: true,
            center:true,
            stagePadding: 10
        },
        600:{
            items: 2,
            nav: true,
            center:true,
            stagePadding: 0,
            margin: 10
            
        },
        800:{
            items: 2,
            nav:true
            
        },
        1000:{
            items: 3,
            nav: true,
            center: true,
            stagePadding: 50,
           
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






