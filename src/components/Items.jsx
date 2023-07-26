import React from "react";

// Cria um componente Items que recebe as props de nome, array, valor e funções
function Items({ nome, array, valor, handleChange, adicionarItem }) {
  return (
    <div className="option">
      <label htmlFor={nome}>Escolha uma {nome}:</label>
      <select id={nome} value={valor} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        {array.map((item) => (
          // Formata o preço com duas casas decimais
          <option key={item.nome} value={item.nome}>
            {item.nome} - R$ {item.valor.toFixed(2)}
          </option>
        ))}
      </select>
      <button onClick={() => adicionarItem(valor)} disabled={!valor}>
        Adicionar
      </button>
    </div>
  );
}

export default Items;
