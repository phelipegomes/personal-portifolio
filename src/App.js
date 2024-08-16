

import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Contato from './components/Contato';
import Curriculo from './components/Curriculo';
import Inicio from './components/Inicio';
import Projetos from './components/Projetos';
import SobreMim from './components/SobreMim'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App raleway-text">
      <NavBar />
      <section id="inicio" className="py-5 mt-5 background-main">
        <Inicio />
      </section>
      <section id="sobre-mim" className="py-5 background-about">
        <SobreMim />
      </section>
      <section id="projetos" className="py-5 background-projects">
        <Projetos />
      </section>
      <section id="curriculo" className="py-5 bg-light">
        <Curriculo />
      </section>
      <section id="contato" className="py-5">
        <Contato />
      </section>

    </div>
  );
}


