import React, {useEffect, useState} from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from "./pokemon.module.css";
import img from './photoPokemon.jpg'
import {OnePokemon} from "../OnePokemon/OnePokemon";
import {pokemonService} from "../../services";
import {pokemonActions} from "../redux/index"
import {HeaderPage} from "../../pages/header.page";
import {OnePokemonWithType} from "../OnePokemon/OnePokemonWithType"
const Pokemon = () => {

    let {pokemon, next, prev, pokemonDetails, onePokemon, typeSelected, newColor, typeSelectedUrl} = useSelector(state => state.pokemon)
    let {results} = pokemon
    let [typeInformation, setTypeInformation] = useState(false);
    let [conditionOne, setConditionOne] = useState(true);
    let [conditionTwo, setConditionTwo] = useState(false);
        let classNameText = css.PokemonCardText;
    let classNameButtom = css.PokemonCardButton;
    if (newColor.newColor === '1') {
        classNameText = css.PokemonCardTextDark;
        classNameButtom=css.PokemonCardButtonDark;
    }
    let { name, weight, type, newStats, defense, moves, attack, specialDefense, specialAttack, hp, image, speed, id} = onePokemon

    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams({offset: '0'})

    useEffect(() => {
            if (typeSelected===true || typeSelected==="true"){
                setConditionOne(true)
                setConditionTwo(false)
                dispatch(pokemonActions.getAllPokemon({offset: query.get('offset')}))

            }
            else {
                setConditionOne(false)
                setConditionTwo(true)
                fetch(typeSelectedUrl[0])
                    .then(value => value.json())
                    .then(value => setTypeInformation(value))
            }
        },
        [query, pokemonDetails, typeSelected, conditionOne])
    const arrPokemon=[];
    if (typeInformation){
        for (let i=0; i<typeInformation.pokemon.length; i++){
            arrPokemon.push(typeInformation.pokemon[i].pokemon)
        }}
    function prevPage() {
        const prevPage = +query.get('offset') - 20
        if (prevPage >= 0) {
            setQuery({offset: `${prevPage}`})
        }
    }
    function nextPage() {
        const nextPage = +query.get('offset') + 20
        setQuery({offset: `${nextPage}`})
    }
    let classNameButtons=css.buttonPage
    if (conditionTwo===true){
        classNameButtons=css.buttonPageHidden
    }
    else {
        classNameButtons=css.buttonPage
    }

    return (
        <div className={css.mainPage}>
            <HeaderPage/>
            <div className={css.sorting}>
                <div className={css.PokemonCardField}>
                    <div className={css.pokemonList}>
                        {conditionOne && results && results.map(onePokemon => <OnePokemon
                        key={onePokemon.url} onePokemon={onePokemon} arrPokemon={arrPokemon}/>)}
                            {conditionTwo  && arrPokemon.map(arPokemon => <OnePokemonWithType
                            key={arPokemon.url} arPokemon={arPokemon}/>)}
                    </div>



                    <div className={css.PokemonCard}>
                        <div className={css.PokemonCardTop}>
                            <img src={image} className={css.mainImages}/>
                        </div>
                        <div className={classNameText}><strong>{name} #{id}</strong></div>
                        <div className={classNameButtom}>
                            <div> <strong>Type: </strong>{type && type[0]}  {type && type[1]}</div>
                            <div><strong>Attack: </strong>{attack && attack}</div>
                            <div><strong>Hp: </strong>{hp && hp}</div>
                            <div><strong>Special attack: </strong>{specialAttack && specialAttack}</div>
                            <div><strong>Special defense: </strong>{specialDefense && specialDefense}</div>
                            <div><strong>Speed: </strong>{speed && speed}</div>
                            <div><strong>Defense: </strong>{defense && defense}</div>
                            <div><strong>Weight: </strong>{weight}</div>
                            <div><strong>Total movies: </strong>{moves && moves.length}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={css.buttonsPage}>
                <button disabled={prev} onClick={prevPage} className={classNameButtons}>Prev</button>
                <Pagination/>
                <button disabled={next} onClick={nextPage} className={classNameButtons}>Next</button>
            </div>
        </div>)
}


export {Pokemon};

