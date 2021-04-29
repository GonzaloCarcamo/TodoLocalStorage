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

        // Where user writes...
        const idea = document.querySelector('#idea').value;
        
        // Validation
        if(idea === ''){
                showError('A message cannot be empty');
                return; // block code
        }

        console.log('agregando')
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