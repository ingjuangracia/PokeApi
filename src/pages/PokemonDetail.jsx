import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/pokemonDetail.css'


const PokemonDetail = () => {

    const [pokemonInfo, setPokemonInfo] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemonInfo(res.data));

    }, [id])

    console.log(pokemonInfo);


    return (
        <article className='container-pokemonDetail'>
            <img className='poke-logo' src="../PokemonDetail/pokemon-logo.png" alt="" />
            <div className={`pokemonDetail-header bg-${pokemonInfo.types?.[0].type.name}`}>
                <img className='poke-img' src={pokemonInfo.sprites?.other["official-artwork"].front_default} alt="" />
            </div>

            <section className='pokemonDetail-body'>
                <h3 className={`pokemonDetail-name colorName-${pokemonInfo.types?.[0].type.name}`}>{pokemonInfo.name}</h3>
                <div className='pokemonDetail-measures'>
                    <p className='pokemonDetail-weight'><b>Weight: </b>{pokemonInfo.weight}</p>
                    <p className='pokemonDetail-height'><b>Height: </b>{pokemonInfo.height}</p>
                </div>

                <h2>Type</h2>
                <p>{pokemonInfo.types?.[0].type.name}</p>

                {
                    pokemonInfo.types?.[1]?.type.name ? <p>{pokemonInfo.types?.[1].type.name}</p> : false
                }

                <h2>Ability</h2>
                <p>{pokemonInfo.abilities?.[0].ability.name}</p>
                <p>{pokemonInfo.abilities?.[1].ability.name}</p>

                <h2>Stats</h2>

                <ul className='poke-card__stats-container'>
                    {
                        pokemonInfo.stats?.map(stat => (
                            <li className='poke-card__stat' key={stat.stat.name}>
                                <span className='poke-card__label'>{stat.stat.name}</span>
                                <span className='poke-card__number'>{stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>

                <h2>Movements:  </h2>
                <p>{pokemonInfo.moves?.[0].move.name}</p>
                <p>{pokemonInfo.moves?.[1].move.name}</p>
                <p>{pokemonInfo.moves?.[2].move.name}</p>
                <p>{pokemonInfo.moves?.[3].move.name}</p>
                <p>{pokemonInfo.moves?.[4].move.name}</p>
                <p>{pokemonInfo.moves?.[5].move.name}</p>
                <p>{pokemonInfo.moves?.[6].move.name}</p>
                <p>{pokemonInfo.moves?.[7].move.name}</p>
                <p>{pokemonInfo.moves?.[8].move.name}</p>
                <p>{pokemonInfo.moves?.[9].move.name}</p>
            </section>


        </article>
    );
};

export default PokemonDetail;