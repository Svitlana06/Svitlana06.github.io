import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pokemonActions} from "../redux/index"
import css from './onePokemon.module.css'

const TypeOnePokemon = ({url}) => {

    const [ability, setAbility] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => setAbility(value))
    }, [])
    const {types} = ability
    const arr = []
    if (types) {
        const abjArr = Object.entries(ability.types)
        for (let i = 0; i <= abjArr.length - 1; i++) {
            arr.push(abjArr[i][1].type.name)}
    }
    const dispatch = useDispatch()


    return (
        <div className={css.typePokemon}>
            {arr[0]} {arr[1]}
        </div>

    );
};

export {TypeOnePokemon};


