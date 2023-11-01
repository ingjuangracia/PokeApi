import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import '../styles/pokedex.css'


const Pokedex = () => {

    const user = useSelector(state => state.user);

    const [getPokemons, setGetPokemons] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9999/")
            .then(res => setGetPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokemonTypes(res.data.results))
    }, []);

    console.log(getPokemons);
    //console.log(pokemonTypes);

    const search = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemonSpecie = (e) => {
        axios.get(e.target.value)
            .then(res => setGetPokemons(res.data.pokemon));
        setPage(1);
    }

    //Pagination Logic

    const [page, setPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(12);
    const initialPoke = (page - 1) * pokePerPage;
    const finalPoke = page * pokePerPage;
    const maxPage = getPokemons && Math.ceil(getPokemons.length / pokePerPage);

    return (
        <div>
            <h2>¡ Welcome <b>{user} !, </b>Here you can find your favorite Pokemon</h2>
            <form onSubmit={search}>
                <input className='find-poke'
                    type="text"
                    value={pokemonSearch}
                    placeholder="Find a Pokemon"
                    onChange={e => setPokemonSearch(e.target.value)}
                />
                <button className='button-findPoke'>Search</button>
            </form>
            <select className='filter-pokemonSpecie' onChange={filterPokemonSpecie}>
                <option value="">Select Pokemon Type</option>
                {
                    pokemonTypes.map(pokemonType => (
                        <option value={pokemonType.url} key={pokemonType.url}>{pokemonType.name}</option>
                    ))
                }
            </select>
            <Pagination
                page={page}
                maxPage={maxPage}
                setPage={setPage}
            />
            <div className='poke-container'>
                {
                    getPokemons.slice(initialPoke, finalPoke).map(getPokemon => (
                        <div key={getPokemon.url ? getPokemon.url : getPokemon.pokemon.url}>

                            <PokemonCard
                                getPokemonUrl={getPokemon.url ? getPokemon.url : getPokemon.pokemon.url}
                            />
                        </div>

                    ))
                }
            </div>
            <Pagination
                page={page}
                maxPage={maxPage}
                setPage={setPage}
            />
        </div>
    );
};

export default Pokedex;