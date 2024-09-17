let inventario = [
    { nome: 'Teclado', preco: 100, emEstoque: true },
    { nome: 'Mouse', preco: 50, emEstoque: false },
    { nome: 'Monitor', preco: 600, emEstoque: true }
  ];

console.log('Inventário inicial:');
console.log(inventario);


inventario.push(
    { nome: 'Cadeira Gamer', preco: 1200, emEstoque: true },
    { nome: 'Webcam', preco: 150, emEstoque: true },
    { nome: 'Microfone', preco: 300, emEstoque: false },
    { nome: 'Fone de Ouvido', preco: 80, emEstoque: true },
    { nome: 'Impressora', preco: 400, emEstoque: false },
    { nome: 'Mousepad', preco: 30, emEstoque: true },
    { nome: 'Headset', preco: 200, emEstoque: true },
    { nome: 'Hub USB', preco: 40, emEstoque: true },
    { nome: 'Caixa de Som', preco: 250, emEstoque: false },
    { nome: 'Leitor de Cartão', preco: 70, emEstoque: true },
    { nome: 'Notebook', preco: 2500, emEstoque: true }
);

console.log('\nApós adicionar novos itens:');
console.log(inventario);

inventario.pop();
console.log('\nApós remover o último produto:');
console.log(inventario);

inventario[0].preco = 120;
console.log('\nApós modificar o preço do Teclado:');
console.log(inventario);

inventario[2].emEstoque = false;
console.log('\nApós marcar o Monitor como fora de estoque:');
console.log(inventario);

console.log('\nProdutos em estoque:');
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + ' está em estoque.');
    }
}

let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log('\nProdutos em estoque (usando filter):');
console.log(produtosEmEstoque);
