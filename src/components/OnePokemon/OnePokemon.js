import React from 'react';
import css from './onePokemon.module.css'
import img from './photoPokemon.jpg'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {TypeOnePokemon} from "./typeOnePokemon"
import {OnePokemonWithType} from "./OnePokemonWithType"
import {pokemonActions} from "../redux/index";

const OnePokemon = ({onePokemon}) => {
    const {newColor,typeSelected } = useSelector(state => state.pokemon)
    const [ability, setAbility] = useState(false);
    const [textColor, setTextColor] = useState(false);
    const {name, url} = onePokemon
    const dispatch = useDispatch()
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => setAbility(value))
    }, [])
    function detailsPokemon(url) {
        const type = [];
        const image=ability.sprites.front_default;
        const {name, types, weight, stats, moves, id} = ability
        const defense = [];
        const attack = [];
        const hp = [];
        const specialAttack = [];
        const specialDefense=[];
        const speed=[];
            for (let i = 0; i < stats.length; i++) {
                if (stats[i].stat.name === "attack") {
                    attack.push(stats[i].base_stat)
                }
                if (stats[i].stat.name === "defense") {
                    defense.push(stats[i].base_stat)
                }
                if (stats[i].stat.name === "hp") {
                    hp.push(stats[i].base_stat)
                }
                if (stats[i].stat.name === "special-attack") {
                    specialAttack.push(stats[i].base_stat)
                }
                if (stats[i].stat.name === "special-defense") {
                    specialDefense.push(stats[i].base_stat)
                }
                if (stats[i].stat.name === "speed") {
                    speed.push(stats[i].base_stat)

            }
        }
        const abArr = Object.entries(types)
        for (let i = 0; i <= abArr.length - 1; i++) {
            type.push(abArr[i][1].type.name)
        }
        dispatch(pokemonActions.pokemonDetails({image, type, weight, moves, name, defense, attack, specialDefense, specialAttack, hp, speed, id}))
        dispatch(pokemonActions.newColorText({newColor:'1'}))
    }

    return (
        <div className={css.imageText}>
            <div>
                        <div className={css.mainImagesText} onClick={() => {
                            detailsPokemon(name, url)
                        }}>
                            <div><img src={ability ? ability.sprites.front_default : undefined } className={css.mainImages}/></div>
                            <div>{name}</div>
                            <div className={css.typePokemon}><TypeOnePokemon url={url}/></div>
                        </div>

            </div>

        </div>
    );
};

export {OnePokemon};