let total = 0;

const preco = document.getElementById("precoProduto");

const nome = document.getElementById("nomeProduto");

const valorTotal = document.getElementById("valorTotal");

const listaProdutos = document.getElementById("listaProdutos");

function adicionarProduto(){

    const itemProduto = document.createElement('li');

    let valorProduto = parseFloat(preco.value);

    if(nome.value.trim() === '' || preco.value.trim() === ''){
      alert("Por favor, informe o nome e o preço do produto")
    } else {
        itemProduto.textContent = `${nome.value} - R$ ${preco.value}`

        const btnRemover = document.createElement('button');
        btnRemover.textContent = '❌'

        btnRemover.onclick = function(){
            removerProduto(itemProduto, valorProduto)
        }
        
        listaProdutos.appendChild(itemProduto)
        itemProduto.appendChild(btnRemover)
        console.log(itemProduto)
        console.log(btnRemover)

        total = total + valorProduto;

        valorTotal.textContent = `Total R$ ${total.toFixed(2)}`;

        nome.value = ''
        preco.value = ''
    }
}

function removerProduto(itemRemovivel, valorSubtraivel){

    total = total - valorSubtraivel;
    valorTotal.textContent = `Total: R$ ${total.toFixed(2)}`
    itemRemovivel.remove();
}
