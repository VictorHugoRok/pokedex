const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/pokemon', pokemonRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Pokedex' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salio mal en el servidor!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
