const photoLinks = document.querySelectorAll('.photo-link');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption'); 
const closeModal = document.querySelector('.modal-close');

photoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        modal.style.display = 'block';
        modal.classList.add('show');
        modalImage.src = link.href; 

        const caption = link.nextElementSibling.textContent; 
        modalCaption.textContent = caption; 
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show'); 
    modal.classList.add('hide'); 
    setTimeout(() => {
        modal.style.display = 'none'; 
        modal.classList.remove('hide'); 
        modalCaption.textContent = '';  
    }, 300);   
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        modal.classList.add('hide'); 
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('hide'); 
            modalCaption.textContent = ''; 
        }, 300);
    }
});