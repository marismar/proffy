import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars2.githubusercontent.com/u/19637434?s=460&u=05b9ce8e5505a1fc88dfa1c2d4c28dfa1c6bb48f&v=4" 
          alt="Marismar Costa"
        />
        <div>
          <strong>Marismar Costa</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/>
        Apaixonada por explodir coisas em laboratório e por mudar a vida das 
        pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
