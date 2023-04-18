import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';
import css from "./header.module.css";

import {pokemonService} from "../../services/index"
import {pokemonActions} from "../redux/index"
import {OneTypeHeader} from "../index";

const Header = () => {
    const dispatch = useDispatch()
    const [type, setType] = useState(true)
    const [typeSelected, setTypeSelected] = useState(true)
    const {results} = type
    const arrResults = [];
    if (results) {
        for (let i = 0; i <= results.length - 1; i++) {
            if (results[i].name === typeSelected) {
                arrResults.push(results[i].url)
            }
        }
    }
    useEffect(() => {
        pokemonService.getAllTypes().then(({data}) => setType(data))
        dispatch(pokemonActions.typesPokemon(typeSelected))
        dispatch(pokemonActions.typeSelectedPokemon(arrResults))
    }, [typeSelected])

    return (<div>
        <div className={css.header}>

            POKEDEX
        </div>

        <Form className={css.menuTypes}>
            <select onChange={(e) => setTypeSelected(`${e.target.value}`)}>
                <option className={css.menuTypeOne} value={true}>Types</option>
                <option className={css.menuTypeOne}
                        value={results && results[0].name}>{results && results[0].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[1].name}>{results && results[1].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[2].name}>{results && results[2].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[3].name}>{results && results[3].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[4].name}>{results && results[4].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[5].name}>{results && results[5].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[6].name}>{results && results[6].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[7].name}>{results && results[7].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[8].name}>{results && results[8].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[9].name}>{results && results[9].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[10].name}>{results && results[10].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[11].name}>{results && results[11].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[12].name}>{results && results[12].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[13].name}>{results && results[13].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[14].name}>{results && results[14].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[15].name}>{results && results[15].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[16].name}>{results && results[16].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[17].name}>{results && results[17].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[18].name}>{results && results[18].name}</option>
                <option className={css.menuTypeOne}
                        value={results && results[19].name}>{results && results[19].name}</option>


            </select>

        </Form>
    </div>)

}
export {Header}