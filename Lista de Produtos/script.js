const produtos = [  {nome:"Computador", categoria: "Tecnologia", preço:"800"},
                    {nome:"Telemóvel", categoria: "Tecnologia", preço:"600"},
                    {nome:"TV", categoria: "Tecnologia", preço:"750"}] 
                    
let produtoTabela = document.getElementById("produtoLista");     

for(i=0;i<produtos.length;i++){

    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha);

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha);
    
    let produtoTabelaDadosPreço = document.createElement('td');
    produtoTabelaDadosPreço.innerHTML = produtos[i].preço;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreço);
    produtoTabela.appendChild(produtoTabelaLinha)

}