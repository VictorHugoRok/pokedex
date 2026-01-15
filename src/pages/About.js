import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Acerca de Pokedex</h1>
        <div className="about-card">
          <h2>Que es la Pokedex?</h2>
          <p>
            La Pokedex es una enciclopedia digital de alta tecnologia que los entrenadores
            Pokemon utilizan para registrar y obtener informacion sobre las diferentes
            especies de Pokemon que encuentran. No se que hiceaaajaja
          </p>
        </div>
        <div className="about-card">
          <h2>Nuestra Mision</h2>
          <p>
            Proporcionar a los entrenadores Pokemon de todo el mundo una herramienta
            completa y facil de usar para explorar y aprender sobre todas las especies
            de Pokemon conocidas.
          </p>
        </div>
        <div className="about-card">
          <h2>Caracteristicas</h2>
          <ul>
            <li>Informacion detallada de mas de 150 Pokemon</li>
            <li>Imagenes de alta calidad</li>
            <li>Busqueda rapida y eficiente</li>
            <li>Interfaz intuitiva y atractiva</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
