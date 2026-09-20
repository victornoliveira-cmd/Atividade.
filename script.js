fetch("produtos.json")
    .then(resposta => resposta.json())
    .then(produtos => {

        const container = document.getElementById("produtos");
        produtos.forEach(produto => {

            const card = document.createElement("div");

            card.classList.add("produto");

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">

                <h2>${produto.nome}</h2>

                <p>${produto.descricao}</p>

                <h3>R$ ${produto.preco.toFixed(2)}</h3>

                <button onclick="comprar('${produto.nome}')">
                    Comprar
                </button>
            `;
            container.appendChild(card);
        });
    })
    .catch(erro => {
        console.log("Erro ao carregar os produtos:", erro);
    });
function comprar(nome) {

    alert("Você comprou: " + nome);

}