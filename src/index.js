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

printHome();

document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('visible');
})
