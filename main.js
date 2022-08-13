const $ = document;

const menuburger = $.querySelector(".burger");
const list = $.querySelector(".list");
let bool = true;

menuburger.addEventListener('click', () => {

    if (screen.width <= 475 & bool == true) {
        menuburger.classList.add('open');
        list.style.top = 0;
        bool = false;
    } else if (screen.width <= 475 & bool == false) {
        menuburger.classList.remove('open');
        list.style.top = '-100%';
        bool = true;
    } else if (bool == true) {
        menuburger.classList.add('open');
        list.style.top = 0;
        bool = false;
    } else {
        menuburger.classList.remove('open');
        list.style.top = '-20%';
        bool = true;
    }
})


