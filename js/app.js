// Variables section
const form = document.querySelector('#form');
const list = document.querySelector('#list');
let ideas = [];


// Events section
eventListeners();

function eventListeners() {
        // When an user adds an idea
        form.addEventListener('submit', addIdea);

        // When document is ready
        document.addEventListener('DOMContentLoaded', () => {
                ideas = JSON.parse(localStorage.getItem('ideas')) || [];

                createHTML();
        })
}


// Functions section
function addIdea(e) {
        e.preventDefault();

        // Where user writes...
        const idea = document.querySelector('#idea').value;
        
        // Validation
        if(idea === ''){
                showError('A message cannot be empty');
                return; // block code
        }

        const ideaObj = {
                id: Date.now(),
                idea
        }

        // Add ideas
        ideas = [...ideas, ideaObj];
        
        // Create HTML
        createHTML();

        // Reset form
        form.reset();
}

// Show error message
function showError(error) {
        const messageError = document.createElement('p');
        messageError.textContent = error;
        messageError.classList.add('text-center');
        const errorDiv = document.querySelector('#errorDiv');
        errorDiv.appendChild(messageError);

        setTimeout(() => {
                messageError.remove();
        }, 2000)

}

// Create HTML
function createHTML() {

        cleanHTML();

        if(ideas.length > 0){
                ideas.forEach( idea => {
                        // HTML
                        const li = document.createElement('li');
                        li.textContent = idea.idea;
                        li.classList.add('list-group-item');
                        list.appendChild(li);
                })
        }

        storage();
}

function storage() {
        localStorage.setItem('ideas', JSON.stringify(ideas));
}

function cleanHTML() {
        while(list.firstChild){
                list.removeChild(list.firstChild);
        }
}