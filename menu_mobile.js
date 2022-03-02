const botao__mobile = document.querySelector('.botao__mobile');
const menu__navegacao = document.querySelector('.menu__navegacao')

botao__mobile.addEventListener('click', () => {
    menu__navegacao.classList.toggle('active')
}) 

