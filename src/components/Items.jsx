import React from "react";

function Items({ nome, array, gender, valor, handleChange, adicionarItem }) {
  return (
    <div className="option">
      <label htmlFor={nome}>Escolha {gender} {nome}:</label>
      <select id={nome} value={valor} onChange={(e) => handleChange(e.target.value)}>
        <option value="" disabled>
          Selecione uma opção
        </option>
        {array.map((item) => (
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
