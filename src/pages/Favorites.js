import React, { useState } from 'react';
import '../styles/Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Pikachu', type: 'Electric', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 25, name: 'Charizard', type: 'Fire/Flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 150, name: 'Mewtwo', type: 'Psychic', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="favorites-container">
      <div className="favorites-content">
        <h1>Mis Pokemon Favoritos</h1>
        {favorites.length === 0 ? (
          <div className="empty-state">
            <p>No tienes Pokemon favoritos aun</p>
            <p>Explora la Pokedex y agrega tus favoritos!</p>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((pokemon) => (
              <div key={pokemon.id} className="favorite-card">
                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(pokemon.id)}
                >
                  ×
                </button>
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <p className="pokemon-type">{pokemon.type}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
