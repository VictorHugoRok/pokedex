const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// GET all pokemon
router.get('/', pokemonController.getAllPokemon);

// GET pokemon by name
router.get('/:name', pokemonController.getPokemonByName);

// GET pokemon by type
router.get('/type/:type', pokemonController.getPokemonByType);

// POST - Add to favorites
router.post('/favorites', pokemonController.addToFavorites);

// DELETE - Remove from favorites
router.delete('/favorites/:id', pokemonController.removeFromFavorites);

module.exports = router;
