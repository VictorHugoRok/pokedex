# PokeDex

Una aplicacion completa de Pokedex desarrollada con React y Node.js, que utiliza la PokeAPI para obtener informacion sobre Pokemon.

![WhatsApp Image 2025-12-02 at 1 50 55 PM](https://github.com/user-attachments/assets/c77c92a5-67d3-4cd7-af3a-710c77220d14)

## Estructura del Proyecto

```
pokedex/
├── src/                    # Frontend React
│   ├── components/         # Componentes reutilizables
│   │   ├── Navigation.js
│   │   └── Pokedex.js
│   ├── pages/             # Paginas de la aplicacion
│   │   ├── Home.js        # Pagina principal (azul/morado)
│   │   ├── About.js       # Acerca de (verde)
│   │   └── Favorites.js   # Favoritos (morado)
│   ├── styles/            # Archivos CSS
│   ├── services/          # Servicios API
│   └── utils/             # Utilidades
├── backend/               # Backend Node.js
│   ├── controllers/       # Logica de negocio
│   ├── routes/           # Rutas de la API
│   ├── models/           # Modelos de datos
│   ├── config/           # Configuracion
│   ├── middleware/       # Middleware personalizado
│   └── server.js         # Servidor Express
└── public/               # Archivos publicos
```

## Caracteristicas

- **Multiples paginas con diferentes temas de color**:
  - Home: Gradiente azul/morado
  - About: Gradiente verde
  - Favorites: Gradiente morado oscuro
- **Navegacion fluida** con React Router
- **Backend API** con Node.js y Express
- **Integracion con PokeAPI** para datos de Pokemon
- **Sistema de favoritos** (backend)
- **Diseno responsivo** y atractivo

## Instalacion y Uso

### Frontend

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar la aplicacion:
```bash
npm start
```

La aplicacion se abrira en [http://localhost:3000](http://localhost:3000)

### Backend (Opcional)

1. Navegar a la carpeta backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm start
```

El servidor estara disponible en [http://localhost:5000](http://localhost:5000)

Para mas informacion sobre el backend, consulta [backend/README.md](backend/README.md)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
