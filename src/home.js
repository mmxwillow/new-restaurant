/*
        <main id="home">
            <div class="card">
                <div class="title">About</div>
                <div class="section">Lorem ipsum dolor sit amet, pro ne ferri dicant efficiantur, soluta quaestio per ea. Animal tibique tractatos ut est, ad per modo scripta iracundia?<br>Te pri fastidii theophrastus, nisl omnis cetero has ad. Vide suscipiantur cu quo, ex mea soleat periculis torquatos. Vim porro platonem deterruisset cu? Delenit splendide forensibus pro no. In debet soluta nam, eum civibus expetendis et?</div>
            </div>
            <div class="card">
                <div class="title">Location</div>
                <div class="section">4190 Duke Street,<br>Montreal H3C 5K4</div>
                <a href="#"><span id="link" class="material-symbols-outlined">
                    open_in_new
                    </span> Fake google maps link</a>
            </div>
            <div class="card">
                <div class="title">Hours</div>
                <div class="section">Monday-Friday:<br>11am-12am<br><br>
                    Weekend:<br>11am-11pm</div>
            </div>
        </main>
*/

export default function printHome(){
    const main = document.createElement('main');
    main.id = 'home';
    cards.forEach(card => {
        const wrapper = document.createElement('div');
        const title = document.createElement('div');
        const section = document.createElement('div');

        wrapper.classList.add('card');
        title.classList.add('title');
        section.classList.add('section');

        title.innerHTML = card.title;
        section.innerHTML = card.section;

        wrapper.appendChild(title);
        wrapper.appendChild(section);

        if(card.link){
            const link = document.createElement('a');
            link.innerHTML = card.link;
            link.href = "#";
            wrapper.appendChild(link);
        }

        main.appendChild(wrapper);
    })
    document.querySelector('#content').appendChild(main);
}

class Card{
    constructor(title, section, link){
        this.title = title;
        this.section = section;
        this.link = link;
    }
}

const about = new Card('About','Lorem ipsum dolor sit amet, pro ne ferri dicant efficiantur, soluta quaestio per ea. Animal tibique tractatos ut est, ad per modo scripta iracundia?<br>Te pri fastidii theophrastus, nisl omnis cetero has ad. Vide suscipiantur cu quo, ex mea soleat periculis torquatos. Vim porro platonem deterruisset cu? Delenit splendide forensibus pro no. In debet soluta nam, eum civibus expetendis et?');
const location = new Card('Location','4190 Duke Street,<br>Montreal H3C 5K4','<span id="link" class="material-symbols-outlined">open_in_new</span> Fake google maps link');
const hours = new Card('Hours','Monday-Friday:<br>11am-12am<br><br>Weekend:<br>11am-11pm');

const cards = [];

cards.push(about);
cards.push(location);
cards.push(hours);