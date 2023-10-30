import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/pokemonCard.css'

const PokemonItem = ({ getPokemonUrl }) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(getPokemonUrl)
            .then(res => setPokemon(res.data));

    }, [])

    //console.log(pokemon);

    const navigate = useNavigate();

    return (
        <article className={`poke-card border-${pokemon.types?.[0].type.name}`} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className={`poke-card__header bg-${pokemon.types?.[0].type.name}`}>
                <img className='poke-card__sprite' src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            </div>
            <section className='poke-card__body'>
                <h3 className={`poke-card__name colorName-${pokemon.types?.[0].type.name}`}>{pokemon.name}</h3>
                <ul className='poke-card__types-container'>
                    {
                        pokemon.types?.map(type => (
                            <li className='poke-card__type' key={type.type.name}>{type.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <section className='poke-card__footer'>
            <ul className='poke-card__stats-container'>
                    {
                        pokemon.stats?.map(stat => (
                            <li className='poke-card__stat' key={stat.stat.name}>
                                <span className='poke-card__label'>{stat.stat.name}</span>
                                <span className='poke-card__number'>{stat.base_stat}</span>
                                
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    );
};

export default PokemonItem;