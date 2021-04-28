// Variables section
const form = document.querySelector('#form');
const list = document.querySelector('#list');
let ideas = [];


// Events section
eventListeners();

function eventListeners() {
        form.addEventListener('click', addIdea);
}


// Functions section
function addIdea(e) {
        e.preventDefault();

        console.log('test');
}