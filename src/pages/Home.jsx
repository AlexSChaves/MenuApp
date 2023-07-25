import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
  const comidas = ['Crepe de Frango', 'Crepe de Pizza', 'Crepe de Chocolate', 'Crepe de Queijo'];

  const bebidas = ['Suco de Laranja', 'Suco de Uva', 'Refrigerante', 'Água'];

  const [comidaSelecionada, setComidaSelecionada] = React.useState('');

  const [bebidaSelecionada, setBebidaSelecionada] = React.useState('');

  const adicionarItem = (item) => {
    props.setComidas({
      ...props.comidas,
      [item]: (props.comidas[item] || 0) + 1,
    });
  };

  const removerItem = (item) => {
    if (props.comidas[item]) {
      if (props.comidas[item] > 1) {
        props.setComidas({
          ...props.comidas,
          [item]: props.comidas[item] - 1,
        });
      } else {
        const { [item]: _, ...resto } = props.comidas;
        props.setComidas(resto);
      }
    }
  };

  const handleChangeComida = (event) => {
    setComidaSelecionada(event.target.value);
  };

  const handleChangeBebida = (event) => {
    setBebidaSelecionada(event.target.value);
  };


  return (
    <div className="container">
      <h1 className="title">Iniciar pedido</h1>
      <div className="options">
        <div className="option">
          <label htmlFor="comida">Escolha uma comida:</label>
          <select id="comida" value={comidaSelecionada} onChange={handleChangeComida}>
            <option value="">Selecione uma opção</option>
            {comidas.map((comida) => (
              <option key={comida} value={comida}>
                {comida}
              </option>
            ))}
          </select>
          <button onClick={() => adicionarItem(comidaSelecionada)} disabled={!comidaSelecionada}>
            Adicionar
          </button>
        </div>

        <div className="option">
          <label htmlFor="bebida">Escolha uma bebida:</label>
          <select id="bebida" value={bebidaSelecionada} onChange={handleChangeBebida}>
            <option value="">Selecione uma opção</option>
            {bebidas.map((bebida) => (
              <option key={bebida} value={bebida}>
                {bebida}
              </option>
            ))}
          </select>

          <button onClick={() => adicionarItem(bebidaSelecionada)} disabled={!bebidaSelecionada}>
            Adicionar
          </button>
        </div>
      </div>

      <div className="items">
        <h3>Itens selecionados:</h3>
        {Object.entries(props.comidas).map(([nome, quantidade]) => (
          <div key={nome} className="item">
            <p>{nome} - {quantidade}x</p>
            <div className="buttons-item">
              <button onClick={() => adicionarItem(nome)}>+</button>
              <button onClick={() => removerItem(nome)}>-</button>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <Link to="/revisao">
          <button>Revisar pedido</button>
        </Link>
        <button onClick={() => props.setComidas('')}>Limpar pedido</button>
      </div>
    </div>
  );
}
export default Home;
