# Pokedex Backend API

Backend server para la aplicacion Pokedex construido con Node.js y Express.

## Instalacion

1. Navegar a la carpeta backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env basado en .env.example:
```bash
cp .env.example .env
```

4. Iniciar el servidor:
```bash
npm start
```

Para desarrollo con auto-reload:
```bash
npm run dev
```

## Endpoints disponibles

### Pokemon
- `GET /api/pokemon` - Obtener lista de Pokemon
- `GET /api/pokemon/:name` - Obtener Pokemon por nombre
- `GET /api/pokemon/type/:type` - Obtener Pokemon por tipo

### Favoritos
- `POST /api/pokemon/favorites` - Agregar Pokemon a favoritos
- `DELETE /api/pokemon/favorites/:id` - Eliminar Pokemon de favoritos

## Estructura del proyecto

```
backend/
├── config/          # Configuracion
├── controllers/     # Logica de negocio
├── routes/          # Rutas de la API
├── models/          # Modelos de datos (para uso futuro con DB)
├── middleware/      # Middleware personalizado
└── server.js        # Punto de entrada
```
