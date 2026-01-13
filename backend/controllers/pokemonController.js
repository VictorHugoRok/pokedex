const axios = require('axios');

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// In-memory storage for favorites (in production, use a database)
let favorites = [];

// Get all pokemon
const getAllPokemon = async (req, res) => {
  try {
    const limit = req.query.limit || 150;
    const offset = req.query.offset || 0;

    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de Pokemon' });
  }
};

// Get pokemon by name
const getPokemonByName = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name.toLowerCase()}`);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: 'Pokemon no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al obtener el Pokemon' });
    }
  }
};

// Get pokemon by type
const getPokemonByType = async (req, res) => {
  try {
    const { type } = req.params;
    const response = await axios.get(`${POKEAPI_BASE_URL}/type/${type.toLowerCase()}`);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: 'Tipo de Pokemon no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al obtener Pokemon por tipo' });
    }
  }
};

// Add to favorites
const addToFavorites = (req, res) => {
  try {
    const pokemon = req.body;

    // Check if already in favorites
    const exists = favorites.find(fav => fav.id === pokemon.id);
    if (exists) {
      return res.status(400).json({ error: 'Pokemon ya esta en favoritos' });
    }

    favorites.push(pokemon);
    res.status(201).json({ message: 'Pokemon agregado a favoritos', favorites });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar a favoritos' });
  }
};

// Remove from favorites
const removeFromFavorites = (req, res) => {
  try {
    const { id } = req.params;
    favorites = favorites.filter(fav => fav.id !== parseInt(id));
    res.json({ message: 'Pokemon eliminado de favoritos', favorites });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar de favoritos' });
  }
};

module.exports = {
  getAllPokemon,
  getPokemonByName,
  getPokemonByType,
  addToFavorites,
  removeFromFavorites
};
