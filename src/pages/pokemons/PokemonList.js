import React, { useEffect, useRef, useState } from 'react';
import { pokemonService } from '../../_services/pokemon.service';
import { Link } from 'react-router-dom';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState(null);
    const [loaded, setLoaded] = useState(null);
    const [error, setError] = useState(null);
    const flag = useRef(false)

    useEffect(() => {
        if ( flag.current === false ) {
            pokemonService.getAllPokemons()
                .then(res => {
                    console.log(res.data)
                    setPokemons(res.data)
                    setLoaded(true)
                })
                .catch(error =>{
                    console.log(error)
                    setError(error);
                    setLoaded(true);
                })
        }
        return () => flag.current = true
    }, [])

    if ( !loaded ) {
        return(
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } else if ( error ) {
        return(
            <h1>Vous avez une erreur de type : {error.response.status}</h1>
        )
    } else {
        return (
            <div className='d-flex flex-wrap row-gap-5 column-gap-5 justify-content-between col-10 mx-auto mt-5'>
                {pokemons.map(pokemon => (
                <div className="card col-2" key={pokemon.id}>
                    <img src={pokemon.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">Pokemon de type : 
                        - {pokemon.apiTypes.map(type => (
                            type.name
                        ))} -
                        </p>
                        <Link to={`/pokemon/details/${pokemon.id}`} className="btn btn-success">Voir les détails</Link>
                    </div> 
                </div>
                ))}
            </div>
        );
    }

    
};

export default PokemonList;