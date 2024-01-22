document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const sectionHero = document.querySelector('.hero');
    const alturaHero = sectionHero.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementosHeader();
        } else {
            exibirElementosHeader();
        }
    })


    //Programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons [i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //Sessão FAQ
    for (let i = 0; i < questions.length; i++) {
        questions [i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultarElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
} 

function exibirElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
} 

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

