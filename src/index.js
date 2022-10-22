const displayMenu = (() => {
    document.querySelector('#menu').addEventListener('click', () => {
        document.querySelector('ul').classList.toggle('visible');
    })
})();