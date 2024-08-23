import React from 'react';
export default function ListarProdutos({ produtos }) {
    return (
        <div className="lista-produtos">
            {produtos.map((produto) => (
                <div key={produto.id} className="card-produto">
                    <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
                    <p className="nome-produto">{produto.nome}</p>
                    <p className="preco-produto">{produto.preco}</p>
                    <button className="botao">Buy</button>
                </div>
            ))}
        </div>
    );
}