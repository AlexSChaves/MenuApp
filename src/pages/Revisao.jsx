import React from 'react';
import { Link } from 'react-router-dom';
import './Revisao.css';
import { crepes, bebidas, cappuccinos, balasDocesGelados } from '../helpers/cardapio.js';

function Revisao({ comidas }) {
  const imprimir = () => {
    window.print();
  };

  const total = Object.entries(comidas).reduce((acc, [nome, quantidade]) => {
    const crepe = crepes.find((crepe) => crepe.nome === nome);
    const bebida = bebidas.find((bebida) => bebida.nome === nome);
    const cappuccino = cappuccinos.find((cappuccino) => cappuccino.nome === nome);
    const balaDoceGelado = balasDocesGelados.find(
      (balaDoceGelado) => balaDoceGelado.nome === nome
    );
    const valor =
      crepe ? crepe.valor : bebida ? bebida.valor : cappuccino ? cappuccino.valor : balaDoceGelado ? balaDoceGelado.valor : 0;
    return acc + valor * quantidade;
  }, 0);

  return (

    <div className="container-revisao">
      <h1 className="title-revisao">Revisão do pedido</h1>

      <div className="items-revisao">
        {Object.entries(comidas).map(([nome, quantidade]) => (
          <p key={nome} className="item-revisao">
            {nome} - R$ {(crepes.find((crepe) => crepe.nome === nome)?.valor || bebidas.find((bebida) => bebida.nome === nome)?.valor || cappuccinos.find((cappuccino) => cappuccino.nome === nome)?.valor || balasDocesGelados.find(
              (balaDoceGelado) => balaDoceGelado.nome === nome
            )?.valor).toFixed(2)} - {quantidade}x
          </p>
        ))}
      </div>

      <div className="total-revisao">
        Valor total: R$ {total.toFixed(2)}
      </div>

      <div className="buttons-revisao">
        <Link to="/">
          <button>Voltar</button>
        </Link>
        <button onClick={imprimir}>Imprimir</button>
      </div>
    </div>
  );
}

export default Revisao;
