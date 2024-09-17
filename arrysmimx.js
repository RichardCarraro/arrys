
let inventario = [
    { nome: 'Teclado', preco: 100, emEstoque: true },
    { nome: 'Mouse', preco: 50, emEstoque: false },
    { nome: 'Monitor', preco: 600, emEstoque: true }
  ];
  

  console.log('Inventário inicial:');
  console.log(inventario);
  
 
  inventario.push({ nome: 'Cadeira Gamer', preco: 1200, emEstoque: true });
  console.log('\nApós adicionar Cadeira Gamer:');
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

  