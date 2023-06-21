function aplicarDesconto (livros) {

  const desconto = 0.3
  livrosEmDescontos = livros.map(livro =>  {

    return {...livro, preco: livro.preco - (livro.preco * desconto)}

  }) 

  return livrosEmDescontos
}