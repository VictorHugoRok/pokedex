# Estructura del Proyecto Pokedex

## Vista General

Este proyecto ha sido reorganizado para seguir las mejores prácticas de desarrollo con separación clara entre frontend y backend.

## Estructura de Carpetas

```
pokedex/
│
├── src/                           # FRONTEND (React)
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── Navigation.js         # Barra de navegación (fija en todas las páginas)
│   │   └── Pokedex.js            # Componente principal de la Pokedex
│   │
│   ├── pages/                     # Páginas con diferentes colores
│   │   ├── Home.js               # Página principal (gradiente azul/morado)
│   │   ├── About.js              # Página acerca de (gradiente verde)
│   │   └── Favorites.js          # Página favoritos (gradiente morado oscuro)
│   │
│   ├── styles/                    # Archivos CSS organizados
│   │   ├── App.css               # Estilos globales de la aplicación
│   │   ├── Navigation.css        # Estilos de navegación
│   │   ├── Pokedex.css          # Estilos del componente Pokedex
│   │   ├── Home.css             # Estilos página Home
│   │   ├── About.css            # Estilos página About
│   │   ├── Favorites.css        # Estilos página Favorites
│   │   └── index.css            # Estilos base
│   │
│   ├── services/                  # Servicios para llamadas API (preparado para uso futuro)
│   │
│   ├── utils/                     # Funciones utilitarias (preparado para uso futuro)
│   │
│   ├── App.js                     # Componente principal con React Router
│   └── index.js                   # Punto de entrada de React
│
├── backend/                       # BACKEND (Node.js + Express)
│   │
│   ├── controllers/               # Lógica de negocio
│   │   └── pokemonController.js  # Controladores de Pokemon (CRUD, favoritos)
│   │
│   ├── routes/                    # Rutas de la API
│   │   └── pokemonRoutes.js      # Endpoints de Pokemon
│   │
│   ├── models/                    # Modelos de datos (para DB futura)
│   │
│   ├── config/                    # Configuración del servidor
│   │   └── config.js             # Variables de configuración
│   │
│   ├── middleware/                # Middleware personalizado (preparado)
│   │
│   ├── server.js                  # Servidor Express principal
│   ├── package.json              # Dependencias del backend
│   ├── .env.example              # Ejemplo de variables de entorno
│   └── README.md                 # Documentación del backend
│
├── public/                        # Archivos públicos estáticos
│
├── package.json                   # Dependencias del frontend
├── README.md                      # Documentación principal
└── PROJECT_STRUCTURE.md          # Este archivo

```

## Páginas y Colores

### 1. Home (Página Principal)
- **Ruta**: `/`
- **Color**: Gradiente azul/morado (#667eea → #764ba2)
- **Componentes**: Navigation + Pokedex
- **Descripción**: Página principal con el componente Pokedex funcional

### 2. About (Acerca de)
- **Ruta**: `/about`
- **Color**: Gradiente verde (#11998e → #38ef7d)
- **Componentes**: Navigation + Tarjetas informativas
- **Descripción**: Información sobre el proyecto y características

### 3. Favorites (Favoritos)
- **Ruta**: `/favorites`
- **Color**: Gradiente morado oscuro (#8e2de2 → #4a00e0)
- **Componentes**: Navigation + Grid de Pokemon favoritos
- **Descripción**: Lista de Pokemon favoritos con opción de eliminar

## Tecnologías Utilizadas

### Frontend
- React 18
- React Router DOM (navegación entre páginas)
- CSS3 (gradientes, animaciones, flexbox, grid)
- PokeAPI (datos de Pokemon)

### Backend
- Node.js
- Express.js
- Axios (peticiones HTTP)
- CORS (seguridad)

## Endpoints del Backend

```
GET    /                           # Mensaje de bienvenida
GET    /api/pokemon                # Obtener lista de Pokemon
GET    /api/pokemon/:name          # Obtener Pokemon por nombre
GET    /api/pokemon/type/:type     # Obtener Pokemon por tipo
POST   /api/pokemon/favorites      # Agregar a favoritos
DELETE /api/pokemon/favorites/:id  # Eliminar de favoritos
```

## Características Implementadas

- ✅ Estructura de carpetas profesional
- ✅ Separación frontend/backend
- ✅ 3 páginas con diferentes temas de color
- ✅ Navegación fluida entre páginas
- ✅ Componentes reutilizables
- ✅ API REST con Express
- ✅ Sistema de favoritos (backend)
- ✅ Diseño responsivo
- ✅ Animaciones y transiciones CSS

## Próximos Pasos Sugeridos

1. **Conectar frontend con backend**:
   - Crear servicio API en `src/services/pokemonService.js`
   - Reemplazar fetch directo a PokeAPI con llamadas al backend

2. **Base de datos**:
   - Agregar MongoDB o PostgreSQL
   - Crear modelos en `backend/models/`
   - Persistir favoritos

3. **Autenticación**:
   - Sistema de usuarios
   - Favoritos personalizados por usuario

4. **Más funcionalidades**:
   - Búsqueda avanzada
   - Filtros por tipo
   - Comparador de Pokemon
   - Modo oscuro/claro

## Cómo Ejecutar

### Frontend
```bash
npm install
npm start
```
Abre http://localhost:3000

### Backend
```bash
cd backend
npm install
npm start
```
Abre http://localhost:5000
