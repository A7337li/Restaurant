let $ = document;

const menuburger = $.querySelector(".burger");
const list = $.querySelector(".list");
let bool = true;

menuburger.addEventListener('click', () => {
    if (bool == true) {
        menuburger.classList.add('open');
        list.style.top = 0;
        bool = false;
    } else {
        menuburger.classList.remove('open');
        list.style.top = '-10%';
        bool = true;
    }
})
