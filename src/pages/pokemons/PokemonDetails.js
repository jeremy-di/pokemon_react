import React, { useEffect, useRef, useState } from 'react';
import { pokemonService } from '../../_services/pokemon.service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loaded, setLoaded] = useState(null);
    const [error, setError] = useState(null);
    const flag = useRef(false)

    const { id } = useParams()

    useEffect(() => {
        if ( flag.current === false ) {
            pokemonService.getPokemon(id)
                .then(res => {
                    console.log(res.data)
                    setPokemon(res.data)
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
            <div className='d-flex flex-wrap justify-content-center col-10 mx-auto'>
                <div className="card col-4">
                    <img src={pokemon.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">Pokemon de type : 
                        {pokemon.apiTypes.map(type => (
                            type.name
                        ))}
                        </p>
                        <p className="card-text">HP = {pokemon.stats.attack} points</p>
                        <p className="card-text">---------------</p>
                        <p className="card-text">Attaque = {pokemon.stats.attack} points</p>
                        <p className="card-text">Défense = {pokemon.stats.defense} points</p>
                        <p className="card-text">Attaque spéciale = {pokemon.stats.special_attack} points</p>
                        <p className="card-text">Défense spéciale = {pokemon.stats.special_defense} points</p>
                        <Link to={`/pokemon/list`} className="btn btn-success">Revenir à la liste</Link>
                    </div> 
                </div>
            </div>
        );
    }

    
};

export default PokemonDetails;