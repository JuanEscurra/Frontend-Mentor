
let listLinkNav = document.querySelectorAll('.header__list a');
let listLink = Array.prototype.slice.call(listLinkNav,0);

listLink.forEach( (currentValue, currentIndex, listObj) => {

    currentValue.addEventListener('click', () => {
        let linkActivo = document.querySelector('.header__list .active');
        
        if(linkActivo != null) {
            linkActivo.classList.remove('active');
        }
        currentValue.classList.add('active');

    });

    currentValue.classList.remove('active');
});


// let btnHamburger = document.querySelector('.header__btnHamburger');

// btnHamburger.addEventListener('click', () => {

    
// });
