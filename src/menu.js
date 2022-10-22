export default function printMenu(){
    const main  = document.createElement('main');
    main.id = 'menu-page';

    menuItems.forEach(item => {
        const wrapper = document.createElement('div');

        const title = document.createElement('div');
        const price = document.createElement('div');
        const section = document.createElement('div');

        title.classList.add('title');
        price.classList.add('price');
        section.classList.add('section');

        title.innerHTML = item.name;
        price.innerHTML = item.price;
        section.innerHTML = item.ingredients;

        wrapper.appendChild(title);
        wrapper.appendChild(price);
        wrapper.appendChild(section);

        main.appendChild(wrapper);
    })
    document.querySelector('#content').appendChild(main);
}

class MenuItem{
    constructor(name,price,ingredients){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

const menuItems = [];

const item1 = new MenuItem('Chicken Bulgogi','12$','onion, garlic, sesame oil, cayenne, chicken breast, soy sauce');
const item2 = new MenuItem('Spicy Cauliflower','10$','cauliflowerettes, diced pepper, onion, hot sauce');
const item3 = new MenuItem('Chilli Tofu','10$','tofu cubes, pepper, onions, chilli, garlic gravy');
const item4 = new MenuItem('Scones','5$','clotted cream, lemon curd, strawberry jam');
const item5 = new MenuItem('Mango Chutney','4$','sweet and sour chutney with spices');
const item6 = new MenuItem('Hommos','7$','chickpea puree, sesame paste, lemon');

menuItems.push(item1,item2,item3,item4,item5,item6);