import printHome from './home.js'
import printMenu from './menu.js';
import printContact from './contact.js';

const displayHeader = (() => {
    const header = document.createElement('header');
    const list = document.createElement('ul');
    const menu = document.createElement('span');

    const links =['Home', 'Menu', 'Contact'];

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = link;
        li.id = link.toLowerCase() + 'Btn';
        li.addEventListener('click', clearDisplay);
        list.appendChild(li);
    })

    menu.id = 'menu';
    menu.classList.add("material-symbols-outlined");
    menu.innerHTML = "menu";

    menu.addEventListener('click', () => {
        document.querySelector('ul').classList.toggle('visible');
    })

    header.appendChild(list);
    header.appendChild(menu);

    document.querySelector('#content').appendChild(header);
})();

const displayPage = (() => {
    document.querySelector('#homeBtn').addEventListener('click', printHome);
    document.querySelector('#menuBtn').addEventListener('click', printMenu);
    document.querySelector('#contactBtn').addEventListener('click', printContact);
})();

function clearDisplay(){
    if(document.querySelector('.visible')) document.querySelector('.visible').classList.remove('visible');
    document.querySelector('main').remove();
}

printHome();

