import React, {useEffect} from 'react'
import { fetchHeroes } from '../actions/heroesActions'
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const HeroDetail = () => {
    const {heroId} = useParams()
    useEffect(() => {
       (fetchHeroes(heroId))

    }, [heroId])

    return(
        <div>
            {heroId}
        </div>
    )
}


export default HeroDetail