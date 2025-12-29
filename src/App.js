import {useState} from 'react'
import { useEffect } from 'react';
import './App.css';

function App() {


  const [pokemonListData, setPokemonListData] = useState([])
  const [pokemonDisplayData, setPokemonDisplayData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const limitPage= 20


  const pokeballGifImg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'

const typeColor = {
      normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

  //Funcion para obetner lista de datos
  const getPokemonList = () => {
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(res => res.json())
      .then(data => setPokemonListData(data.results))
    })
  }


  //Funcion para obtener un dato
  const getPokemonByName = (name) => {
    setLoading(true)
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => setPokemonDisplayData(data))
        .then(() => setLoading(false))
    }, 1500)
  }

    const fetchPokemon = async () => {
    const offset = page * limitPage;
    }


  const sotedList = pokemonListData.sort((a, b) => a.name.localeCompare(b.name))

  const mainType = pokemonDisplayData?.types?.[0]?.type?.name;
  const backgroundColor = mainType ? typeColor[mainType] || '#f5f5f5' : '#f5f5f5';

   useEffect(() => {
    fetchPokemon();
  }, [page])


  const nextPage = () => {
    setPage (page + 1)
  }

  const prevPage = () => {
    if (page > 0) setPage(page-1)
  }

    return (
    <div className="pokedex">
      <img
        className="pokedex-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon logo"
      />
      <div
        className="pokedex-display"
        style={{
          backgroundColor,
          transition: 'background-color 0.3s ease',
        }}
      >
        <img
          src={
            loading || !pokemonDisplayData
              ? pokeballGifImg
              : pokemonDisplayData?.sprites?.front_default
          }
          alt={pokemonDisplayData?.name || 'Pokeball'}
        />
        <span>
          {loading || !pokemonDisplayData ? '' : pokemonDisplayData.name}
        </span>
      </div>

      <button className="pokedex-button" onClick={getPokemonList}>
        Atrapa tu pokemon
      </button>

      <button className = "next-button" onClick = {nextPage}>
        Siguiente pagina
      </button>

      <ul className="pokedex-info">
        {pokemonListData.map((pk) => (
          <li key={pk.name} onClick={() => getPokemonByName(pk.name)}>
            {pk.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
