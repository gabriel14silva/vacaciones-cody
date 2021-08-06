// $(function(){
//     $(window).scroll(function(){
//         var winTop = $(window).scrollTop();
//         if(winTop >= 30){
//             $("body").addClass("sticky-header");
//         }else{
//             $("body").removeClass("sticky-header");
//         }
//     })
// })

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });