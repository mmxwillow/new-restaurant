export default function printContact(){
    const main = document.createElement('main');
    main.id = 'contact';
    //Form card
    const form = document.createElement('form');
    const title = document.createElement('div');
    const emailLabel = document.createElement('label');
    const textLabel = document.createElement('label');
    const email = document.createElement('input');
    const textarea = document.createElement('textarea');
    const submit = document.createElement('button');

    title.classList.add('title');
    emailLabel.classList.add('section');
    textLabel.classList.add('section');

    title.innerHTML = 'Contact us';
    emailLabel.innerHTML = 'E-mail address';
    textLabel.innerHTML = 'Message';
    submit.innerHTML = 'Submit';

    email.placeholder = 'user@email.com';
    textarea.placeholder = 'Write you message here...';

    email.name = 'email';
    textarea.name = 'message';

    emailLabel.setAttribute('for','email');
    textLabel.setAttribute('for','message');

    form.appendChild(title);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(textLabel);
    form.appendChild(textarea);
    form.appendChild(submit);

    main.appendChild(form);
    //Number card
    const wrapper = document.createElement('div');
    const title2 = document.createElement('div');
    const section = document.createElement('div');

    title2.classList.add('title');
    section.classList.add('section');

    title2.innerHTML = 'Call us';
    section.innerHTML = "Don't like emails?<br>Call us:<br>123-456-789";

    wrapper.appendChild(title2);
    wrapper.appendChild(section);

    main.appendChild(wrapper);

    document.querySelector('#content').appendChild(main);
}