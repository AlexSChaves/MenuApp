import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="container-header">
      <h1 className="title-header">QUIOSQUE FAMÍLIAS DO PARQUE</h1>
      <h4 className="address-header">Av Beira Lago, Jardim do Lago II, Paraíso do Tocantins - TO</h4>
      <div className="contact-div">
        <h4 className="contact-header">email: <a href="mailto:milkawriell@gmail.com">milkawriell@gmail.com</a></h4>
        <h4 className="contact-header">tel: (63) 99949-8742</h4>
      </div>
    </div>
  );
}

export default Header;
