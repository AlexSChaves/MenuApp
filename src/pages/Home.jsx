import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { crepes, bebidas, cappuccinos, balasDocesGelados } from "../helpers/cardapio.js";
import Items from "../components/Items";

function Home(props) {
  // Definir os estados para cada tipo de item
  const [comida, setComida] = React.useState("");
  const [bebida, setBebida] = React.useState("");
  const [cappuccino, setCappuccino] = React.useState("");
  const [balaDoceGelado, setBalaDoceGelado] = React.useState("");

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
          gender="um"
          nome="crepe"
          array={crepes}
          valor={comida}
          handleChange={setComida}
          adicionarItem={adicionarItem}
        />
        <Items
          gender="uma"
          nome="bebida"
          array={bebidas}
          valor={bebida}
          handleChange={setBebida}
          adicionarItem={adicionarItem}
        />
        <Items
          gender="um"
          nome="cappuccino"
          array={cappuccinos}
          valor={cappuccino}
          handleChange={setCappuccino}
          adicionarItem={adicionarItem}
        />
        <Items
          gender="uma"
          nome="bala, doce ou gelado"
          array={balasDocesGelados}
          valor={balaDoceGelado}
          handleChange={setBalaDoceGelado}
          adicionarItem={adicionarItem}
        />
      </div>

      <div className="items">
        <h3>Itens selecionados:</h3>
        {Object.entries(props.comidas).map(([nome, quantidade]) => (
          <div key={nome} className="item">
            <p>
              {quantidade}x - {nome} - R$ {(crepes.find((crepe) => crepe.nome === nome)?.valor ||
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

      <div className="total">Valor total: R$ {total.toFixed(2)}</div>

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
