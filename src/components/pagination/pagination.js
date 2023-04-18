import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

import css from "../pagination/pagination.module.css";
import {pokemonActions} from "../redux";

const Pagination = () => {

    const params=useParams()
    const [offset, setOffset]=useSearchParams({offset: params.offset})
    let dispatch=useDispatch()
    const countPagesArray=[];
    const numberPageClick=(number)=>{
        setOffset({offset: `${number}`})
    }

    for (let i=offset; i<=+(offset+2); i++){
        countPagesArray.push(i)
    }


    useEffect(() => {
        dispatch(pokemonActions.getAllPokemon({offset: offset.get('offset')}))
    }, [offset])


    return (
        <div  className={css.pages}>
            {countPagesArray.map(number=>(
                <div key={number} className={css.page} onClick={()=>{numberPageClick(number)}} value={number} state={number}>
                    {number}
                </div>))}
        </div>

    );
};

export default Pagination;


