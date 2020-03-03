const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', selectItem));

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))

}

// NAVIGATION 

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks")
    const navLinks = document.querySelectorAll('.navlinks li')
    //TOGGLE NAV
    burger.addEventListener('click', () => {
        //Animate Links 
    nav.classList.toggle('nav-active')


    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
   
    });
            burger.classList.toggle('toggle');

});
}

navSlide();


//This is a clean way to call all small functions from here. 
const app = () => {
navSlide();
}