function nav(){
    let lastScrollTop = 0;
    let navbar = document.getElementById('free_nav');
    window.addEventListener('scroll', function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navbar.classList.add('free-nav-sticky');
            document.getElementById('brand-text').innerHTML = 'fi';
            document.getElementById('free-main').classList.add('free-main-main')

        }else{
            navbar.classList.remove('free-nav-sticky');
            document.getElementById('brand-text').innerHTML = 'free.io';
            document.getElementById('free-main').classList.remove('free-main-main')
        }
    });
    let opentoggle = document.getElementById('open-toggle');
    let closetoggle = document.getElementById('close-toggle');
    let navtoggle = document.getElementById('navToggle');
    opentoggle.addEventListener('click', function(){
        navtoggle.classList.add('nav-toggle-show');
    });
    closetoggle.addEventListener('click', function(){
        navtoggle.classList.remove('nav-toggle-show');
    })
}
nav()