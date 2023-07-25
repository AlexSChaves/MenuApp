import React from 'react';
import { Link } from 'react-router-dom';
import './Revisao.css';

function Revisao({ comidas }) {
  const imprimir = () => {
    window.print();
  };

  return (

    <div className="container-revisao">
      <h1 className="title-revisao">Revisão do pedido</h1>

      <div className="items-revisao">
        {Object.entries(comidas).map(([nome, quantidade]) => (

          <p key={nome} className="item-revisao">
            {nome} - {quantidade}x
          </p>
        ))}
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
