module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  POKEAPI_BASE_URL: 'https://pokeapi.co/api/v2',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000'
};
