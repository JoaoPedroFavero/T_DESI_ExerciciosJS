// Bloco 1 — classList

// 1. Selecione o <h1> e adicione a classe destaque a ele.
const tituloDestaque = document.querySelector(`h1`).classList.add(`destaque`);

// 2. Selecione o #produto-1 e adicione a classe ativo.
const produtoAtivo = document.querySelector(`#produto-1`);
produtoAtivo.classList.add(`ativo`);

// 3. Selecione o #caixa-mensagem e remova a classe escondido, fazendo a mensagem aparecer.
const mensagem = document.querySelector(`#caixa-mensagem`).classList.remove(`escondido`);

// 4. Selecione o #produto-2 e use classList.toggle() para alternar a classe ativo.
const produtoDois = document.querySelector(`#produto-2`).classList.toggle(`ativo`);



// Bloco 2 — Eventos com click
 
// 5. No botão #btn-tema, adicione um evento de click que faça classList.toggle('ativo') no <body> (defina no CSS, se quiser, como fica o "modo escuro").
const body = document.querySelector(`body`);
const botaoTema = document.getElementById(`btn-tema`);
botaoTema.addEventListener(`click`, () =>{
    body.classList.toggle(`dark-theme`);
});

// 6. No #btn-favoritar-1, adicione um evento de click que adicione a classe destaque ao #produto-1. Repita a ideia no #btn-favoritar-2, aplicando a classe destaque ao #produto-2.
const produto1 = document.querySelector(`#produto-1`);
const produto1h2 = document.querySelector(`#produto-1 h2`);
const botaoFavoritar1 = document.querySelector(`#btn-favoritar-1`);
botaoFavoritar1.addEventListener(`click`, () => {
    produto1.classList.toggle(`destaque`);

    // 7. No #produto-1, adicione um evento de click que mostre no console o texto do <h2> desse produto.
    console.log(produto1h2.textContent);
});

const produto2 = document.querySelector(`#produto-2`);
const botaoFavoritar2 = document.querySelector(`#btn-favoritar-2`);
botaoFavoritar2.addEventListener(`click`, () => {
    produto2.classList.toggle(`destaque`);
});

// 7. No #produto-1, adicione um evento de click que mostre no console o texto do <h2> desse produto.
//Respondida Acima junto a 6.


// Bloco 3 — Eventos novos 
// Para os exercícios abaixo, pesquisem no MDN ou Google qual evento do JavaScript resolve cada situação, antes de programar.
 
// 8. Quando o mouse passar por cima (sem clicar) do #imagem-produto, adicione a classe destaque a ela. Quando o mouse sair de cima da imagem, remova a classe. (Pesquisar: eventos de mouse além de click.)
const imagemProduto = document.querySelector(`#imagem-produto`);

imagemProduto.addEventListener(`mouseenter`, () => {
    imagemProduto.classList.toggle(`destaque`);
});

imagemProduto.addEventListener(`mouseleave`, () => {
    imagemProduto.classList.toggle(`destaque`);
});


// 9. No campo #campo-busca, faça com que, a cada letra digitada, o texto do #resultado-busca seja atualizado mostrando o que foi digitado (ex: Você digitou: abc). (Pesquisar: evento que dispara a cada mudança no valor de um input, em tempo real.)
const campoBusca = document.getElementById(`campo-busca`);
const resultadoBusca = document.getElementById(`resultado-busca`);

campoBusca.addEventListener(`input`, (e) => {
    resultadoBusca.textContent = `Você pesquisou: ${e.target.value}`;
});


// 10. No #form-contato, impeça o comportamento padrão do formulário (que recarrega a página) e, em vez disso, mostre no #feedback-form a mensagem "E-mail enviado!" com a classe sucesso. (Pesquisar: evento de formulário + como impedir o comportamento padrão do navegador.)
const feedback = document.getElementById(`feedback-form`);
const formulario = document.getElementById(`form-contato`);
formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();

    feedback.textContent = `E-mail enviado!`;
    feedback.classList.toggle(`sucesso`);
});


// 11. No #campo-email, adicione um evento que, quando o campo perder o foco (o usuário clicar fora dele), verifique se o campo está vazio — se estiver, mostre no #feedback-form a mensagem "Preencha o e-mail" com a classe erro. (Pesquisar: evento de perda de foco.)
const email = document.getElementById(`campo-email`);
email.addEventListener(`blur`, () =>{
    feedback.textContent = `Preencha o email`;
    feedback.classList.toggle(`erro`);
});


// 12. Desafio: no #campo-busca, adicione um evento que detecte quando o usuário aperta a tecla Enter e, quando isso acontecer, mostre no console a mensagem "Busca confirmada!". (Pesquisar: evento de teclado e como identificar qual tecla foi pressionada.)
campoBusca.addEventListener(`keydown`, (e) => {
    if (e.key == `Enter`){
        console.log(`Busca confirmada`);
    }
});