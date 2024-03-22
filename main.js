const modal = document.querySelector('.modal');
const button = document.querySelectorAll('.button');
const closeButton = document.querySelector('.modal--close');

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });
    
};

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});
