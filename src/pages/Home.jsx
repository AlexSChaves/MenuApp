import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { crepes, bebidas, cappuccinos, balasDocesGelados } from "../helpers/cardapio.js";
import Items from "../components/Items";

function Home(props) {
  const [comidaSelecionada, setComidaSelecionada] = React.useState("");
  const [bebidaSelecionada, setBebidaSelecionada] = React.useState("");
  const [cappuccinoSelecionado, setCappuccinoSelecionado] = React.useState("");
  const [balaDoceGeladoSelecionado, setBalaDoceGeladoSelecionado] = React.useState("");

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

  const handleChangeCappuccino = (event) => {
    setCappuccinoSelecionado(event.target.value);
  };

  const handleChangeBalaDoceGelado = (event) => {
    setBalaDoceGeladoSelecionado(event.target.value);
  };

  const total = Object.entries(props.comidas).reduce((acc, [nome, quantidade]) => {
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
    <div className="container">
      <h1 className="title">Iniciar pedido</h1>
      <div className="options">
        <Items
          nome="comida"
          array={crepes}
          valor={comidaSelecionada}
          handleChange={handleChangeComida}
          adicionarItem={adicionarItem}
        />
        <Items
          nome="bebida"
          array={bebidas}
          valor={bebidaSelecionada}
          handleChange={handleChangeBebida}
          adicionarItem={adicionarItem}
        />
        <Items
          nome="cappuccino"
          array={cappuccinos}
          valor={cappuccinoSelecionado}
          handleChange={handleChangeCappuccino}
          adicionarItem={adicionarItem}
        />
        <Items
          nome="bala, doce ou gelado"
          array={balasDocesGelados}
          valor={balaDoceGeladoSelecionado}
          handleChange={handleChangeBalaDoceGelado}
          adicionarItem={adicionarItem}
        />
      </div>

      <div className="items">
        <h3>Itens selecionados:</h3>
        {Object.entries(props.comidas).map(([nome, quantidade]) => (
          <div key={nome} className="item">
            <p>
              {quantidade}x -{" "}
              {nome} - R${" "}
              {(crepes.find((crepe) => crepe.nome === nome)?.valor ||
                bebidas.find((bebida) => bebida.nome === nome)?.valor ||
                cappuccinos.find((cappuccino) => cappuccino.nome === nome)?.valor ||
                balasDocesGelados.find(
                  (balaDoceGelado) => balaDoceGelado.nome === nome
                )?.valor).toFixed(2)}{" "}
            </p>
            <div className="buttons-item">
              <button onClick={() => adicionarItem(nome)}>+</button>
              <button onClick={() => removerItem(nome)}>-</button>
            </div>
          </div>
        ))}
      </div>

      <div className="total">
        Valor total: R$ {total.toFixed(2)}
      </div>

      <div className="buttons">
        <Link to="/revisao">
          <button>Revisar pedido</button>
        </Link>
        <button onClick={() => props.setComidas("")}>Limpar pedido</button>
      </div>
    </div>
  );
}
export default Home;
