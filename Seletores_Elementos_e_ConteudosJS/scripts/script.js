//Questão 1. Selecione o <h1> usando querySelector e mostre o elemento inteiro no console, para confirmar que pegou o elemento certo.
const hUm = document.querySelector(`h1`);
console.log(`Q1 - Titulo h1: `, hUm);

// Questão 2. Selecione o parágrafo de classe subtitulo e mostre no console só o texto dele (não o elemento inteiro).
const subtitulo = document.querySelector(`.subtitulo`);
console.log(`Q2 - Conteúdo Subtitulo: `, subtitulo.innerText);

// Questão 3. Use querySelectorAll para selecionar todos os elementos com classe produto e mostre no console quantos foram encontrados.
const produtosQuantidade = document.querySelectorAll(`.produto`);
console.log(`Q3 - Quantidade de Produtos com classe 'produto': `, produtosQuantidade.length)

// Questão 4. Selecione apenas o primeiro elemento de classe preco da página (dica: dentro de uma lista de querySelectorAll, como pegar só um item específico?) e mostre o texto dele no console.
const primeiroPreco = document.querySelector(`.preco`);
console.log(`Q4 - `, primeiroPreco.textContent);

// Questão 5. Selecione o produto pelo id (#produto-2) e mostre o elemento inteiro no console. Compare no console: o que aparece dentro dele além do texto?
const produto = document.getElementById(`produto-2`);
console.log(`Q5 - id #produto-2: `, produto);

// Questão 6. Selecione o <h2> do #produto-1 (o que tem <strong> dentro) e mostre no console, separadamente, o resultado de textContent, innerText e innerHTML desse elemento. Anote a diferença que você observou entre os três.
const tituloProduto = document.querySelector(`#produto-1 h2`);
console.log(`Q6 - Titulo h2 #produto-1:`, 
    `
    Titulo com textContent: `, tituloProduto.textContent, `\n
    Titulo com innerText: `, tituloProduto.innerText, `\n 
    Titulo com innerHTML: `, tituloProduto.innerHTML

    //TextContent pega todo o conteúdo, incluindo o oculto
    //innerText pega somente aquilo que também o usuário pode ver
    //innerHTML pega o elemento como um todo
);


// Questão 7. Troque o texto do <h1> para "Loja da Turma — Promoção!" usando textContent.
let tituloLojaTurma = document.getElementById(`titulo`);
tituloLojaTurma.textContent = `Loja da Turma - Promoção`;

//Questão 8. Troque o texto do #rodape para "Todos os direitos reservados © 2026".
let rodape = document.getElementById("rodape");
rodape.textContent = `Todos os direitos reservados @ 2026`;

// Questão 9. Selecione a <p class="descricao"> do #produto-3 e altere o texto para "Perfeita para o inverno.".
let descricaoProduto3 = document.querySelector(`#produto-3 .descricao`);
descricaoProduto3.textContent = `Perfeita para o inverno.`;


// Questão 10. Use innerHTML para alterar o <h2> do #produto-2, deixando a palavra "Dev" em negrito, assim: Camiseta <strong>Dev</strong> — Edição Limitada. Depois, tente fazer a mesma alteração usando textContent no lugar de innerHTML e observe (e explique) o que muda no resultado.
let camisetaDev = document.querySelector(`#produto-2 h2`);
camisetaDev.innerHTML = `Camiseta <strong>DEV</strong> — Edição Limitada.`;
    // O innerHTML reconhece TAGs dentro da String, já o textContent não, ele acaba interpretando a TAG como parte da String.


// Questão 11. Selecione o <span id="contador-carrinho"> e altere seu texto para "3".
let carrinho = document.getElementById(`contador-carrinho`);
carrinho.textContent = `3`;

// Questão 12. Selecione o <ul id="lista-avisos"> inteiro e, usando innerHTML, substitua todo o conteúdo por uma nova lista de 2 avisos diferentes dos originais.
let lista = document.getElementById(`lista-avisos`);
console.log(lista);
lista.innerHTML = `
<li>Frete Grátis acima de R$0,02</li>
<li>Entrega em até 1 dia útil de Vênus</li>
<li>Temos bastante estoque</li>`;


// Questão 13. Desafio: troque o texto de um elemento dentro de cada um dos três produtos (#produto-1, #produto-2, #produto-3), usando um seletor diferente em cada caso (por id, por class, e por hierarquia — ex: #produto-3 .preco).
let produto1 = document.querySelector(`#produto-1 h2`);
let produto2 = document.querySelector(`#produto-2 .preco`);
let produto3 = document.querySelector(`#produto-3 .descricao`);

produto1.textContent = "Caneca Simples do TUX";
produto2.innerHTML = `<strong>Promoção</strong>: Grátis + Frete - Leve a camisa de Graça e pague somente R$59,90 de frete!`;
produto3.textContent += ` - Adicionado também que serve pro frio.... na questão 13.`;

// Questão 14. Para pensar (sem código): tudo que você fez até aqui aconteceu assim que a página carregou. Se você quisesse que o texto do #contador-carrinho só mudasse quando alguém clicasse em um botão, o que você acha que precisaria existir no código para isso funcionar?
console.log(`Q14 - O botão precisaria ter uma função onClick que dispararia um evento, e a partir desse evento o contador-carrinho seria modificado.`);