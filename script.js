document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-list');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada para suportejash@gmail.com com sucesso!');
            form.reset();
        });
    }
});
