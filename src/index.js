/*
        <header>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <span id="menu" class="material-symbols-outlined">
                menu
                </span>
        </header>
*/
import printHome from './home.js'

const displayHeader = (() => {
    const header = document.createElement('header');
    const list = document.createElement('ul');
    const menu = document.createElement('span');

    const links =['Home', 'Menu', 'Contact'];

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = link;
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

printHome();

